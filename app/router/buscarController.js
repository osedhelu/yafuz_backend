var express = require('express');
// var bcrypt = require('bcryptjs');
var app = express();

let StudenSchema = require('../models/schema-studen');
const {r} = require('../config/config');


app.get('/studen/:cedula', (req, res)=>{

	// var ced = ;
	// let expre = new RegExp('\')
	// console.log();
	let ad = parseInt(req.params.cedula);
	StudenSchema.find({cedula: { $regex: /acme.*corp/, $options: `${ad}` }}, (err,resp)=>{
		if (err) {
		return r._401(res, {message: err});

		}
		return r._200(res, {studen: resp});
	});
});


module.exports = app;