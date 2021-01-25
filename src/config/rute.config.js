const {env} = require('../../env');
const mongoose = require('mongoose');
let {app} = require('./setting.config');

mongoose.connect(env.mongodbURL_local, {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useCreateIndex: true
} , (err) => {
	if (err) throw err;
	console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
}); 
  



const example = require('../Routers/example.router');
const login = require('../Routers/login.router');
const user = require('../Routers/users.router');
const paises = require('../Routers/paises.router');
const cajas = require('../Routers/cajas.router');
const email = require('../Routers/send-email');




	 

app.use('/e', example);
app.use('/e/login', login);
app.use('/e/user', user);
app.use('/e/paises', paises);
app.use('/e/email', email);
app.use('/e/cajas', cajas);

module.exports = {app};