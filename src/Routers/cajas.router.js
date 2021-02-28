const express = require("express");
const { r } = require('../config/config');
var Cajas = require('../models/cajas.model');
const { usuariosCajas } = require('../function/user.fn');
const { verifyToken } = require('../middleware/authorizer.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', (req, res) => {
	let limite = req.query.limit || 6;
	let pagine = req.query.page || 1;
	pagine = Number(limite * pagine);
	limite = Number(limite);
	Cajas.find({ })
		.sort({ position: 1 })
		.skip(pagine)
		.limit(limite)
		.exec(
			(err, cajas) => {
				if (err) {
					r._500(res, 'Error cargando usuario', err)
				}
				Cajas.count({}, (err, conteo) => {
					return r._200(res, {
						cajas,
						total: conteo
					});
				})
			})
})
router.post('/:token', (req, res) => {
	let token = req.params.token;
	let aa = usuariosCajas(token);
	r._200(res, aa)
})
module.exports = router;
