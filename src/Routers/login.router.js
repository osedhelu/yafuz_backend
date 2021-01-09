const express = require("express");
const { r, va } = require('../config/config');
const { query, conn } = require('../db/consultar.db');
const {Users} = require('../models/users.model');
const router = new express.Router();

router.post('/', (req, res) => {
	r._200(res, req.body);
});



module.exports = router;
