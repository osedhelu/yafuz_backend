let {app} = require('./setting.config');
const example = require('../Routers/example.router');
const login = require('../Routers/login.router');
const user = require('../Routers/users.router');
const paises = require('../Routers/paises.router');
const email = require('../Routers/send-email');

app.use('/e', example);
app.use('/e/login', login);
app.use('/e/user', user);
app.use('/e/paises', paises);
app.use('/e/email', email);

module.exports = {app};