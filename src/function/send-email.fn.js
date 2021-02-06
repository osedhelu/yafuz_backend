const nodemailer = require('nodemailer');
const { env } = require('../../env');
const { templateEmail } = require('../email-template');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 465,
    secure: true,
	auth: {
		user: env.EMAIL_USER,
		pass: env.EMAIL_PASS
	},
	tls: {
		rejectUnauthorized: false
	}
});
const sendEmail = (data = {email: '', subject: '', name: '', token: ''}) => {
(async() => {
	try {
		const mailOptions = {
			from: `'My email' <${env.EMAIL_USER}>`,
			to: data.email,
			subject: data.subject,
			html: templateEmail({name: data.name, email: data.email, token: data.token}),
		};
		let info = await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	  
		// Preview only available when sending through an Ethereal account
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	} catch (error) {
		console.log('Erroes al Enviar Email', error) ;
	}
})()
}

module.exports = { sendEmail }