const {color, PORT} = require('./config/config.js');
const express = require('express');
let bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

let studen = require('./router/studenController');
let login = require('./router/login');
let userController = require('./router/UsersController');
let buscarController = require('./router/buscarController');
app.use('/studen', studen);
app.use('/login', login);	
app.use('/Users', userController);	
app.use('/buscar', buscarController);	

app.listen(PORT, () => {
	console.log(`Express conectado en el puerto ${PORT}: ${color.success}`, 'online');
})

