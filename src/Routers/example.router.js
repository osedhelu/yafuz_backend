const express = require("express");
const { r } = require('../config/config');
const { query } = require('../db/consultar.db');

// lt t {SQLConsult} = require('../db/consultar.db.js');
// const XMLWriter = require("xml-writer");

const router = new express.Router();

router.get('/', (req, res) => {
	(async() => {
		try {
			let data = await query('select * from usuarios');
			return r._200(res, data);
		}catch(err) {
			return r._400(res, err);
		}
	})()
})
module.exports = router;
