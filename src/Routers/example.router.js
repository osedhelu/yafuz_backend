const express = require("express");
const { r } = require('../config/config');
let Usuario = require('../models/usuarios.model');
const router = new express.Router();

router.get('/', (req, res) => {
	var desde = req.query.desde || 0;
    desde = Number(desde);

    Usuario.find({})
       
})

module.exports = router;
