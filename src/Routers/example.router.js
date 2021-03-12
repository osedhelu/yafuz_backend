const express = require("express");
const { r } = require('../config/config');
let schemaPosicion = require('../models/position.model');
let schemaDerrame = require('../models/derrame.model');
const router = new express.Router();

router.get('/', async(req, res) => {
  try {
    let data = await schemaPosicion.find({});
r._200(res, data)
  } catch (err) {
      r._400(res, err)
  }
})

module.exports = router;
