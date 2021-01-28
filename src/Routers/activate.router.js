const express = require("express");
const { env } = require("../../env");
const { r } = require('../config/config');
const { verifyToken } = require('../function/validateToken.fn');
const { createCajas } = require('../function/createCajas.ng');
const SchemaCajas = require('../models/cajas.model');
var Usuario = require('../models/usuarios.model');

const router = new express.Router();

router.post('/', (req, res) => {
    let token = req.body.token;
    let email = req.body.email;
    console.log(token, '    ', email);
    res.redirect(env.app_url)
})
router.get('/:token/:email', (req, res) => {
    let token = req.params.token;
    let email = req.params.email;
    verifyToken(token).then(resp => {
        console.log(resp.User._id);
        Usuario.findById(resp.User._id, (err, usuario) => {
            usuario.activado = '1'
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
                        res.redirect(env.url_frontend)
                    }
                    else {
                        res.redirect(env.url_frontend)
                        
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
