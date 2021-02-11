let {app} = require('./setting.config');
  


// const example = require('../Routers/example.router');
const login = require('../Routers/login.router');
const user = require('../Routers/users.router');
const paises = require('../Routers/paises.router');
const cajas = require('../Routers/cajas.router');
const email = require('../Routers/send-email');
const activate = require('../Routers/activate.router');

const referidos = require('../Routers/referidos.router');
const socket = require('../Routers/socket.router');



	 

app.use('/e/example', example);
app.use('/e/login', login);
app.use('/e/user', user);
app.use('/e/paises', paises);
app.use('/e/email', email);
app.use('/e/cajas', cajas);
app.use('/e/activate', activate);
app.use('/e/activate', referidos);
app.use('/e/referidos', referidos);
app.use('/e/socket', socket)



module.exports = {app};