const express = require("express");
const { r } = require('../config/config');

const router = new express.Router();

router.get('/', (req, res) => {
	
    r._200(res, 'array')
});




module.exports = router;