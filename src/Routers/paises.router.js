const express = require("express");
const { r } = require('../config/config');
const { query } = require('../db/consultar.db');


const router = new express.Router();

router.get('/', (req, res) => {
	(async() => {
		try {
			let data = await query('select * from paises  ORDER BY name ASC');
			return r._200(res, data);
		}catch(err) {
			return r._400(res, err);
		}
	})()
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
