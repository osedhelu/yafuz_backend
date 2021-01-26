const express = require("express");
const { r } = require('../config/config');
const { generarToken } = require('../function/validateToken.fn');
const Users = require('../models/usuarios.model');
const router = new express.Router();
const bcrypt = require('bcryptjs')
 router.post('/', (req, res) => {
	let body = req.body;
	Users.findOne({email: body.email}, (err, usuario) => {
		if(err) {
			return r._500(res, {message: 'Error al buscar el usuario'})
		}
		else if(!usuario) {
			return r._400(res, {message: 'Credenciales incorrectas -- email'})
		}
		if(!bcrypt.compareSync(body.password, usuario.password)){
			return r._400(res, {message: 'Credenciales incorrectas -- password'})
		}
		if(usuario.activado == '0') {
			return r._400(res, {message: 'Este usuario no esta activo', action: `revisé su correo ${usuario.email}`})

		}
		else {
			usuario.password = '';
			return r._200(res, usuario)
		}
	})
});



module.exports = router;
