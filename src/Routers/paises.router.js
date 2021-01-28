const express = require("express");
const { r } = require('../config/config');
const { query } = require('../db/consultar.db');
const paisesSchema = require('../models/paises.model');


const router = new express.Router();

router.get('/', (req, res) => {
	paisesSchema.find({}).exec((err, resp) => {
		if(err) {
			return r._500(res, {message: 'No se encontraro los paises'})
		}
		return r._200(res, resp);
	})
})
router.get('/:iso', (req, res) => {
	let iso = req.params.iso;
	(async() => {
		try {
			let data = await query(`select * from paises where name LIKE "%${iso}%"`);
			return r._200(res, data);
		}catch(err) {
			return r._400(res, err);
		}
	})()
})
module.exports = router;
