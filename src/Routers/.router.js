const express = require("express");
const { r } = require('../config/config');
var Usuario = require('../models/usuarios.model');
const router = new express.Router();

router.get('/', (req, res) => {
	r._200(res, 'ok')
})
module.exports = router;
