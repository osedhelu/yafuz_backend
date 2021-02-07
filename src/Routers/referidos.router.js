const express = require("express");
const { r } = require('../config/config');
const { getReferidos } = require('../function/user.fn');
var Usuario = require('../models/usuarios.model');
const router = new express.Router();

router.get('/:id', (req, res) => {
	var id = req.params.id;
    (async() => {
            try {
                  let resolve = await getReferidos(id);
                  return r._200(res, resolve)  
            } catch (err) {
                   return r._401(res, {message: 'Error', err }) 
            }
    })()
})
module.exports = router;
