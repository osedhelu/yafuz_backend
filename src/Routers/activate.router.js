const express = require("express");
const { env } = require("../../env");
const { r } = require('../config/config');
const { verifyToken } = require('../function/validateToken.fn');
const { createCajas } = require('../function/createCajas.ng');
const SchemaCajas = require('../models/cajas.model');
var Usuario = require('../models/usuarios.model');
const {getUsuario} = require('../function/user.fn');
const router = new express.Router();

router.post('/', (req, res) => {
    let token = req.body.token;
    let email = req.body.email;
    console.log(token, '    ', email);
    res.redirect(env.app_url)
})
router.get('/',  (req, res) => {
    let token = req.query.token;
    verifyToken(token).then(resp => {
        console.log(resp.User._id);
        Usuario.findById(resp.User._id, async(err, usuario) => {
            if(usuario.email == 'osedhelu@gmail.com'){
                usuario.role = 'EMPRESA'; 
            }
            if(usuario.patrocinador == 'nuevo'){
                usuario.patrocinador = await getUsuario()
            }
            usuario.activado = true;
            usuario.save()
        })
        SchemaCajas.find({ usuario: resp.User._id })
            .exec(
                (err, totalCajas) => {
                    if (err) {
                        return r._500(res, { message: 'Error al cargar los usuario' })
                    } 
                    if (totalCajas.length === 0) {
                        SchemaCajas.create(createCajas(resp.User._id), (err, info) => {
                            if (err) {
                                return r._500(res, { messages: 'Error en el servicio', err })
                            }
                        })
                        res.redirect(env.app_url)
                    }
                    else {
                        res.redirect(env.app_url)
                        
                    }
                    console.log(totalCajas.length);

                }
            )
        // .create(createCajas(resp.User._id), (err, info) => {
        //     if(err) {
        //       return r._500(res, {messages: 'Error en el servicio', err})
        //     }


        //   });
    }).catch(err => {
        console.log(err);
    })
})
module.exports = router;
