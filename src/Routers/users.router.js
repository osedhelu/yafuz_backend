const express = require("express");
const { r, validator } = require('../config/config');
const { query } = require('../db/consultar.db');
let  {Users} = require('../models/users.model');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', (req, res) => {
	(async() => {
		try {
			const rows = await query("select * from usuarios")
			return r._200(res, rows);
		} catch(err) {
			return r._400(res, err);
		}
	})();

})


router.post('/', (req, res) => {
	let body = new Users;
	body = req.body;
	
	let user = new Users(null,
		validator('string', body.nombre),
		validator('string', body.apellidos),
		validator('string', body.pais),
		validator('email', body.email),
		validator('number',body.celular),
		validator('password', body.password,{ compare: body.password_compare} ),
		body.patrocinador,
		body.billetera,
		body.tipo,
		body.estadojuego,
		body.estado,
		body.empresa,
		body.subid,
		body.fechayhora,
		body.fecha,
		body.activadom,
		body.sfs,
		body.usuario
		)
		user.validate().then(resp => {
			if(resp) {
				var timestamp = 1293683278;
		var date = new Date(timestamp * 1000);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		let aa = `INSERT INTO usuarios (nombre
			, apellidos
			, pais
			, email
			, celular
			, usuario
			, password
			, patrocinador
			, billetera
			, tipo
			,estadojuego
			,estado
			,empresa
			,subid
			,fechayhora
			,fecha
			,activado,
			sfs
			)
			VALUES (
			'${user.nombre}',
			'${user.apellidos}',
			'${user.pais}',
			'${user.email}',
			'${user.celular}',
			'${user.usuario}',
			'${user.password}',
			1,
			'${user.billetera}',
			'${user.tipo}',
			1,
			1,
			1,
			1,
			'${year}-${month}-${day} ${hours}:${minutes}:${seconds}',
			'${year}-${month}-${day}',
			16,
			0
			);`
			aa.toString();
	(async() => {
		try{
			let data = await query(aa);
			r._200(res, data)
		}catch(err) {
			
			r._400(res, err.sqlMessage);
		}
	})();
			}
		}).catch(err => {
			return r._400(res, err)
		})

		
})
	

module.exports = router;
