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
		body.nombre,
		body.apellidos,
		body.pais,
		body.email,
		body.celular,
		body.password,
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
		body.sfs
		)
		user.validate().then(resp => {
			if(resp) {
				
			}
		}).catch(err => {
			return r._400(res, err)
		})

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
			'${user.patrocinador}',
			'${user.billetera}',
			'${user.tipo}',
			1,
			1,
			1,
			1,
			${getFecha('fechayhora')},
			'${getFecha('fecha')}',
			16,
			0
			);`
	(async() => {
		try{
			aa.toString();
			let data = await query(aa);
			r._200(res, data)
		}catch(err) {
			r._400(res, err);
		}
	})();	
})
	let getFecha = (data) => {
		var timestamp = 1293683278;
		var date = new Date(timestamp * 1000);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		let fecha = '';
		if(data == 'fechayhora'){
			fecha = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		}
		if(data == 'fecha'){
			fecha = `${year}-${month}-${day}`;
		}
		return fecha;
	}

module.exports = router;
