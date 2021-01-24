const nodemailer = require('nodemailer');
const { env } = require('../config/env');
const { templateEmail } = require('../email-template');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 465,
    secure: true,
	auth: {
		user: env.EMAIL_USER,
		pass: env.EMAIL_PASS
	}
});
const sendEmail = async(data) => {
	const mailOptions = {
		from: "'P1' <example@example.com>",
		to: data.email,
		subject: data.subject,
		html: templateEmail(data),
	};
	transporter.sendMail(mailOptions, (error, info) => {
		const status = err ? new Error : true;
        return status;
	});
}

module.exports = { sendEmail }