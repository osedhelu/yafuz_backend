const express = require("express");
const { r, validator } = require('../config/config');
const { query, conn } = require('../db/consultar.db');
const {Users} = require('../models/users.model');
const router = new express.Router();
const bcrypt = require('bcryptjs')
 router.post('/', (req, res) => {
	let body = req.body;
	let user = new Users(
		'',
		'',
		'',
		'',
		validator('email', body.email),
		'',
		body.password
	);
	user.validate().then(resp => {
		if(resp) {
			(async() => {
				try {
					let data = await query(`select password, usuario from usuarios where email = '${user.email}'`);
					if(data.length >= 1) {
						
						if(bcrypt.compareSync(user.password, data[0].password)){
							let one = {
								user: data[0].usuario,
								email: user.email,
								token: 'L9cGsC@rGm!HCAd&K44GKR&Cvbdib5xGJfONMZ%WS*kvIzLLv#'
							}

							return r._200(res, one);
						} else {
							
							return r._400(res, 'usuario incorrecto') 
						}
					}else {
						r._400(res, 'usuario incorrecto')
					}
				}
				catch(err) {
					return r._400(res, err)
				}
			})()
		}
	}).catch(err => {
		return r._400(res, err)
	})

});



module.exports = router;
