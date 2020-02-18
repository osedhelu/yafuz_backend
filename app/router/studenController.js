var express = require('express');
// var bcrypt = require('bcryptjs');
var app = express();
let StudenSchema = require('../models/schema-studen');
const {r} = require('../config/config');

app.post('/', (req, res)=>{
	console.log(req.body);
    let body = req.body;
    let Studen = new StudenSchema({
        name: body.name,
        email: body.email,
        TypeDocument: body.TypeDocument,
        cedula: body.cedula,
        NumCourse: body.NumCourse,
        titleCourse: body.titleCourse,
        observacion: body.observacion,
        img: body.img,

    });
    Studen.save((err, dataResp) => {
        if(err){
            return r._400(res, {Error: "Error en el Servdor", err})
        }
        // dataResp.password = ":)";
        r._201(res, {ok: true, dataResp});
    })
})

app.get('/',(req, res) =>{
    let desde = req.query.desde || 0;
    desde = Number(desde);
    StudenSchema.find({})
    .skip(desde)
    .limit(5)
    .exec((err, data)=>{
        if(err) {
            return r._500(res, {Error: 'En el Servidor', err})
        }
        StudenSchema.count({}, (err, conteo) => {
        r._200(res, {data, total:conteo});

        })    
    })
});
app.delete('/:id', (req, res) => {
    let id = req.params.id;
    StudenSchema.findByIdAndRemove(id, (err, userRemove) =>{
        if(err) {
            return r._500(res, {Error: 'Susedio un error al borrar el Usuario', err})
        }
        if(!userRemove) {
            return r._400(res, {Error: `No Existe el usuario de ID ${id}`, err})
        }
        r._200(res, userRemove);
    });
});

app.put('/:id' ,(req, res) => {
    var id = req.params.id;
    var body = req.body;

    StudenSchema.findById(id, (err, resp) => {
        if(err){
            return r._500(res, {message: 'Error al buscar el Usuario', err});
        }
        if (!resp) {
            return r._400(res, {message: `El Usuario de id${id} no Existe`});
        }
        resp.name = body.name;
        resp.email = body.email;
        resp.role = body.role;
        resp.save((err, dataUsers) =>{
            if(err){
                return r._400(res, {message: 'Error al actualizar el Usuario', err});
            }
            dataUsers.password = ':)';
            r._200(res, dataUsers);
        });
    });
});


module.exports = app;