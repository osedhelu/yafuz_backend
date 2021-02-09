
let express = require("express");
let app = express();

const bodyParser = require('body-parser')

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, token');
    next();
  });
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use('/', express.static('public'));
app.use(express.static('http://localhost:3000/socket.io/socket.io.js'))

module.exports = {app};