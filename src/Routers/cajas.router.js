const express = require("express");
const { r } = require('../config/config');
var CajasSshema = require('../models/cajas.model');
const { usuariosCajas } = require('../function/user.fn');
const SchemaPositon = require('../models/position.model');
const {createCajas} = require('../function/createCajas.ng')

// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', async(req, res) => {
	try {
		let limite = req.query.limit || 6;
	let pagine = req.query.page || 1;
	console.log(limite);
	console.log(pagine);
	pagine = Number(limite * pagine);
	limite = Number(limite);
	let cajas = await CajasSshema.find({ })
	.sort({ position: 1 })
	.skip(pagine)
	.limit(limite)
		
		if(cajas.length < 1) {
			let user = await SchemaPositon.findOne({positionReferido: 'Empresa'})
			let newCajas = await CajasSshema.create(createCajas(user.usuario));
			// newCajas
			return r._200(res, newCajas );
		}else {
			
			let total = await CajasSshema.count({})
			r._200(res, {
				cajas,
				total
			})
		}
		
	} catch (err) {
		console.log(err);
		return r._400(res, err)
	}
})
router.post('/:token', (req, res) => {
	let token = req.params.token;
	let aa = usuariosCajas(token);
	r._200(res, aa)
})
module.exports = router;











// const express = require("express");
// const { r } = require('../config/config');
// var Cajas = require('../models/cajas.model');
// const { usuariosCajas } = require('../function/user.fn');
// const { verifyToken } = require('../middleware/authorizer.js');
// // const XMLWriter = require("xml-writer");

// const router = new express.Router();

// router.get('/', (req, res) => {
// 	let limite = req.query.limit || 6;
// 	let pagine = req.query.page || 1;
// 	pagine = Number(limite * pagine);
// 	limite = Number(limite);
// 	Cajas.find({ })
		
// 		.exec(
// 			(err, cajas) => {
// 				if (err) {
// 					r._500(res, 'Error cargando usuario', err)
// 				}
// 				Cajas.count({}, (err, conteo) => {
// 					return r._200(res, {
// 						cajas,
// 						total: conteo
// 					});
// 				})
// 			})
// })
// router.post('/:token', (req, res) => {
// 	let token = req.params.token;
// 	let aa = usuariosCajas(token);
// 	r._200(res, aa)
// })
// module.exports = router;
