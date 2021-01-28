const express = require("express");
const { r } = require('../config/config');
const { validate_pass } = require('../function/validaciones.fn');
const { sendEmail } = require('../function/send-email.fn');
const { createCajas } = require('../function/createCajas.ng');
const { query } = require('../db/consultar.db');
let Usuario = require('../models/usuarios.model');
const jwt = require('jsonwebtoken');

const {env} = require('../../env.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', (req, res) => {
	Usuario.find({}, 'role nombre apellidos email activado')
		.exec(
			(err, resp) => {
				if (err) {
					return r._500(res, { message: 'Error al cargar los usuario' })
				} else {
					return r._200(res, resp)

				}
			})

})


router.post('/', (req, res) => {
	body = req.body;
	let user = new Usuario({
		nombre: body.nombre,
		apellidos: body.apellidos,
		pais: body.pais,
		email: body.email,
		celular: body.celular,
		password: body.password,
		patrocinador: body.patrocinador,
		billetera: body.billetera,
		role: body.role,
		estadojuego: body.estadojuego,
		estado: body.estado,
		empresa: body.empresa,
		subid: body.subid
	})
	console.log(user);
	validate_pass(body.password, body.password_compare)
		.then(valid_password => {
			user.password = valid_password;
			user.save((err, resp) => {
				if (err) {
					return r._400(res, err);
				} else {
					let token = jwt.sign({
						User: resp
					}, env.SEED_TOKEN, {
						expiresIn: 10080
					})
					sendEmail({ 
						email: 'osedhelu@gmail.com', 
						subject: 'Confimacion de correo', 
						name: `${resp.nombre} ${resp.apellidos}`, 
						token: token })
					createCajas(resp._id)
					return r._201(res, 'Revisé su correo')
				}
			})
		}).catch(err => {
			r._400(res, err);
		})

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


module.exports = router;
