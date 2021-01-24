const express = require("express");
const { r } = require('../config/config');
const { query } = require('../db/consultar.db');
const { env } = require('../config/env');

const nodemailer = require('nodemailer');
const { templateEmail } = require('../email-template');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
	auth: {
		user: env.EMAIL_USER,
		pass: env.EMAIL_PASS
	}
});
const userEmail = 'samueldelahoz43@gmail.com';
const userName = 'Samuel';

const router = new express.Router();

router.post('/', (req, res) => {
	const body = req.body;
	body.email;
	body.token;
	const mailOptions = {
		from: 'P1 - Confirmar email',
		to: 'samueldelahoz43@gmail.com',
		subject: 'Confirmar email',
		html: templateEmail(userEmail)
	};
	///
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.send('Correo enviado');
		}
	});
});
module.exports = router;
