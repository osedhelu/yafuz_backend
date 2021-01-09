const jwt = require('jsonwebtoken');
const {env} = require('../config/env');
const {r} = require('../config/config.js');
let verifyToken = (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, env.SEED_TOKEN, (err, decode) => {
        if (err) {
            return r._401(res, err);
        } else {
            req.my_data = decode;
            next();
        }
    })

}

module.exports = { verifyToken };