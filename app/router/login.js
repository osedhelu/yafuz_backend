let express = require('express');
var bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const {SEED, r} = require('../config/config');
var app = express();
let UserSchema = require('../models/schema-Users');

app.post('/', (req, res) => {
    let body = req.body;
    UserSchema.findOne({email: body.email}, (err, dataUsers)=>{
        if(err){
            return r._500(res, {message: 'Error al Buscar el Usuario'})
        }
        if(!dataUsers){
           return r._400(res, {message: 'Credenciales incorrectas - Email'})
        }
        if(!bcrypt.compareSync(body.password, dataUsers.password)){
            return r._400(res, {message: 'Credenciales incorrectas - Password'})            
        }
        dataUsers.password = ":)";
        var token = jwt.sign({users: dataUsers}, SEED,{expiresIn: 14400  })
        r._200(res, {
            ok: true,
            id:dataUsers._id,
            token, 
            dataUsers,
        });
    });
});


module.exports = app;