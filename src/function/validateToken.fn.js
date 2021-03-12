const jwt = require('jsonwebtoken');
const {env} = require('../../env');
let verifyToken = (token) => {
    return new Promise((resolve, reject) => {
		jwt.verify(token, env.SEED_TOKEN, (err, {User}) => {
			if (err) {
				reject(false);
			} else {
				resolve(User);
			}
		})
	})
    

}
let generarToken = (data) => {
	return jwt.sign({
		User: data
	}, env.SEED_TOKEN, {
		expiresIn: 10080
	})
}

module.exports = { verifyToken, generarToken };