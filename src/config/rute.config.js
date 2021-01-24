let {app} = require('./setting.config');
const example = require('../Routers/example.router');
const login = require('../Routers/login.router');
const user = require('../Routers/users.router');
const paises = require('../Routers/paises.router');
const {env} = require('../config/env.js');
const mongoose = require('mongoose');

mongoose.connect(env.mongodbURL_local, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
} , (err) => {
	if (err) throw err;
	console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});
  
	 

app.use('/e', example);
app.use('/e/login', login);
app.use('/e/user', user);
app.use('/e/paises', paises);


module.exports = {app};