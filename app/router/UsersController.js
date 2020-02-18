var express = require('express');
var bcrypt = require('bcryptjs');
var app = express();
let UserSchema = require('../models/schema-Users');
const {r} = require('../config/config');
// const {, , } = require('../pModule/');

// ?=================================
// Listar todos los Usuarios
// ?=================================
app.get('/',(req, res) =>{
    let desde = req.query.desde || 0;
    desde = Number(desde);
    UserSchema.find({})
    .skip(desde)
    .limit(5)
    .exec((err, data)=>{
        if(err) {
            return r._500(res, {Error: 'En el Servidor', err})
        }
        UserSchema.count({}, (err, conteo) => {
        r._200(res, {data, total:conteo});

        })    
    })
});


// ?=================================
// Crear nuevo Usuarios
// ?=================================
app.post('/', (req, res)=>{
    let body = req.body
    let user = new UserSchema({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        img: body.img,
        role: body.role,

    });
    user.save((err, dataResp) => {
        if(err){
            return r._400(res, {Error: "Error en el Servdor", err})
        }
        dataResp.password = ":)";
        r._201(res, {ok: true, dataResp});
    })
})

// ?=================================
// delete Users
// ?=================================
app.delete('/:id', (req, res) => {
    let id = req.params.id;
    UserSchema.findByIdAndRemove(id, (err, userRemove) =>{
        if(err) {
            return r._500(res, {Error: 'Susedio un error al borrar el Usuario', err})
        }
        if(!userRemove) {
            return r._400(res, {Error: `No Existe el usuario de ID ${id}`, err})
        }
        r._200(res, userRemove);
    });
});


// ?=================================
//  edit Users DB
// ?=================================
app.put('/:id' ,(req, res) => {
    var id = req.params.id;
    var body = req.body;

    UserSchema.findById(id, (err, resp) => {
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

module.exports = app