const express = require("express");
const { r } = require('../config/config');
var Usuario = require('../models/usuarios.model');
// lt t {SQLConsult} = require('../db/consultar.db.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/:desde', (req, res) => {
	var desde = req.query.desde || 0;
    desde = Number(desde);

    Usuario.find({})
        .skip(desde)
        .limit(5)
        .exec(
            (err, usuarios) => {

                if (err) {
                  r._400(res, 'Error cargando usuario')
                }

                Usuario.count({}, (err, conteo) => {
					r._200(res, {
                        usuarios: usuarios,
                        total: conteo})

                })


			})
})
module.exports = router;
