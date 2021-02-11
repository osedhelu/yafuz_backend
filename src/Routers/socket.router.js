const express = require("express");
const { r } = require('../config/config');
var Usuario = require('../models/usuarios.model');
const router = new express.Router();
router.get('/', (req, res) => {

  res.render("about", { title: "Hey", message: "Hello there!" });
})
module.exports = router;
