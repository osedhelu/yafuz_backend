const express = require("express");
const { r } = require('../config/config');
const { verifyToken } = require('../middleware/authorizer');
const { generarToken } = require('../function/validateToken.fn');
const Users = require('../models/usuarios.model');
const schemaSaldo = require('../models/recargas.model');
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
		usuario.estado = true;
		usuario.password = bcrypt.hashSync('11223344', 10)
		usuario.save();
		if(!bcrypt.compareSync(body.password, usuario.password)){
			return r._400(res, {message: 'Credenciales incorrectas -- password'})
		}
		if(!usuario.estado) {
			
			return r._400(res, {message: 'Este usuario no esta activo', action: `revisé su correo ${usuario.email}`})

		}
		else {
			(async() => {
				try {
					let saldo = await schemaSaldo.findOne({id_usuario: usuario._id});
					if(!saldo) {
						let nuevoSaldo = new schemaSaldo({
							id_usuario: usuario._id,
							id_invoice: 'xx'+usuario._id+'xx',
							cantidad_usd:0,
							cantidad_btc:0,
						})
						let list = await nuevoSaldo.save()
						console.log("->>>>>>>>>>>>>>>>>>>>",list);
					}
				usuario.password = '';
				return r._200(res, generarToken(usuario))

				} catch (error) {
				return r._400(res, {message: 'hay un problema con el saldo'})

				}			
			})()
		}
	})
});

router.get('/', verifyToken, (req, res) => {
	r._200(res,req.my_data)
})


module.exports = router;
