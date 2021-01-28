const express = require("express");
const { r } = require('../config/config');
var Cajas = require('../models/cajas.model');
const { createCajas } = require('../function/createCajas.ng');
const SchemaCajas = require('../models/cajas.model'); 
const {verifyToken} = require('../middleware/authorizer.js');
// lt t {SQLConsult} = require('../db/consultar.db.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', verifyToken ,(req, res) => {
    let usuario = req.my_data.User;
    let id = req.params.id;
    // console.log(usuario);
  var limite = req.query.limit || 0;
  var pagine = req.query.page || 0;
  pagine = Number(pagine);
  limite = Number(limite);
    Cajas.find({'usuario' : usuario._id })
    .limit(limite)
    .skip(pagine)
        .exec(
            (err, cajas) => {

                if (err) {
                  r._500(res, 'Error cargando usuario', err)
                }

                Cajas.count({'usuario' : usuario._id }, (err, conteo) => {
					r._200(res, {
                        cajas,
                        total: conteo})

                })
			})
})
router.post('/:id', (req, res) => {
  let id = req.params.id;
  
	SchemaCajas.create(createCajas(id), (err, resp) => {
    if(err) {
      return r._500(res, {messages: 'Error en el servicio', err})
    }
    return r._200(res, resp)
  });
})
module.exports = router;
