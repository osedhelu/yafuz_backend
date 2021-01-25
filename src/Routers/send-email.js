const express = require("express");
const { r } = require('../config/config');
const { query } = require('../db/consultar.db');
const {sendEmail} = require('../function/send-email.fn');

const router = new express.Router();

router.post('/', (req, res) => {
	(async() => {
		try {
			const body = req.body;
			let response = await sendEmail(body);
			res.send(response);
		} catch (error) {
			r._400(res, error);
		}
	})()
});
module.exports = router;
