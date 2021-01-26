const express = require("express");
const { r } = require('../config/config');
var Cajas = require('../models/cajas.model');
const { createCajas } = require('../function/createCajas.ng');
const SchemaCajas = require('../models/cajas.model'); 


// lt t {SQLConsult} = require('../db/consultar.db.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
	var desde = req.query.desde || 0;
    desde = Number(desde);
    Cajas.find({'usuario' : id })	
        .exec(
            (err, cajas) => {

                if (err) {
                  r._500(res, 'Error cargando usuario', err)
                }

                Cajas.count({}, (err, conteo) => {
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
