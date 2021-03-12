const urlRouter = (app) => {	
app.use('/e/example', require('../Routers/example.router'));
app.use('/e/login', require('../Routers/login.router'));
app.use('/e/user', require('../Routers/users.router'));
app.use('/e/paises', require('../Routers/paises.router'));
app.use('/e/email', require('../Routers/send-email'));
app.use('/e/cajas', require('../Routers/cajas.router'));
app.use('/e/activate',  require('../Routers/activate.router'));
// app.use('/e/activate', referidos);
app.use('/e/referidos', require('../Routers/referidos.router'));
app.use('/e/socket', require('../Routers/socket.router'))
app.use('/e/billetera',  require('../Routers/billetera.router'))

} 

module.exports = {urlRouter}