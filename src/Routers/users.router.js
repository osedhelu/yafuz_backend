const express = require("express");
const { r } = require('../config/config');
const { validate_pass } = require('../function/validaciones.fn');
const { sendEmail } = require('../function/send-email.fn');
const { createCajas } = require('../function/createCajas.ng');
const { query } = require('../db/consultar.db');
let Usuario = require('../models/usuarios.model');
const jwt = require('jsonwebtoken');
const { usuariosCajas, savePosition } = require('../function/user.fn');
const { env } = require('../../env.js');
let { listToTree } = require('../function/treeList.fn')
let SchemaPositon = require('../models/position.model');

const router = new express.Router();

router.get('/', async(req, res) => {
	try {
				
		 let _sd = await SchemaPositon.find({})
					.populate('usuario pais');
					let a = JSON.stringify(_sd)
					let data = JSON.parse(a)
					let nuevo = listToTree({data, idKey:'position', parentKey: 'positionReferido', childrenKey: 'relacion'})
					return r._201(res, nuevo)
	} catch (error) {
		r._401(res, error)
	}
})

router.post('/', (req, res) => {
	let { nombre, apellidos, patrocinador, pais, email, celular, password, password_compare } = req.body;
	let user = new Usuario({
		nombre: nombre,
		apellidos: apellidos,
		email: email,
		celular: celular,
		password: password,
		patrocinador: patrocinador || 'nuevo',
	});
	(async () => {
		try {
			// await Usuario.remove({email: 'osedhelu1@gmail.com'})
			await Usuario.remove({})
			user.password = await validate_pass(user.password, password_compare);
			// _____________________________
			let newUsuaro = await user.save();
			// let token = jwt.sign({ id: newUsuaro._id }, env.SEED_TOKEN, { expiresIn: 50080 })
			let aa = await savePosition(newUsuaro._id, newUsuaro.patrocinador, pais);
				
					// sendEmail({ 	
					// 	email: resp.email, 
					// 	subject: 'Confimacion de correo', 
					// 	name: `${resp.nombre} ${resp.apellidos}`, 
					// 	token: token })
					// 	console.log(token);
					// createCajas(resp._id)
					// usuariosCajas(token) //-> prueba
					return r._200(res, newUsuaro)
				
			//______________________________



		} catch (err) {
			console.log("aaassdasd",err);
			return r._400(res, err);
		}
	})()

})


router.put('/:id', (req, res) => {
	let id = req.params.id;
	Usuario.findById(id, (err, resp) => {
		if (err) {
			return r._500(res, { message: 'erroe en el servidor', err });
		}
		else if (!resp) {
			return r._400(res, { message: 'Error al Busacar Usuarios' });
		}
		else {
			let body = req.body;
			let time = new Date();
			resp.apellidos = body.apellidos;
			resp.pais = body.pais;
			resp.celular = body.celular;
			resp.patrocinador = body.patrocinador;
			resp.fechayhora = time;
			resp.fecha = time;

			resp.save((err, resp) => {
				if (err) {
					return r._400(res, err);
				} else {
					// sendEmail({ email: resp.email, subject: 'Confimacion de correo', name: `${resp.nombre} ${resp.apellidos}` })
					return r._201(res, resp)
				}
			})
		}
	})
})

router.get('/:action', (req, res) => {

	Usuario.find({})
		.populate('pais', 'nombre phone_code iso2')
		// .populate(populate)
		.exec(
			(err, usuarios) => {
				if (err) {
					r._400(res, 'Error cargando usuario')
				}
				return r._200(res, usuarios)
			})
})

module.exports = router;
