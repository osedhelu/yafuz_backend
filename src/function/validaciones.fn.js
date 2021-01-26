const { r } = require('../config/config');
const bcryptjs = require('bcryptjs');


let validate_pass = (pass1, pass2) => {
	return new Promise((resolve, reject) => {
		if(pass1 === pass2){
			resolve(bcryptjs.hashSync(pass1, 10))
		}else {
			reject({errors: { password: {message: 'El password es incorrecto'}}})
		}
	}) 

}

module.exports = {validate_pass}