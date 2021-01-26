const express = require("express");
const { r } = require('../config/config');
var Cajas = require('../models/cajas.model');
// lt t {SQLConsult} = require('../db/consultar.db.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', (req, res) => {
    
	var desde = req.query.desde || 0;
    desde = Number(desde);
    Cajas.find({})	
        .exec(
            (err, cajas) => {

                if (err) {
                  r._400(res, 'Error cargando usuario')
                }

                Cajas.count({}, (err, conteo) => {
					r._200(res, {
                        cajas,
                        total: conteo})

                })
			})
})
module.exports = router;
