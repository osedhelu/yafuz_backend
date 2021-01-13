let {app} = require('./setting.config');
const example = require('../Routers/example.router');
const login = require('../Routers/login.router');
const user = require('../Routers/users.router');
const paises = require('../Routers/paises.router');

app.use('/e', example);
app.use('/e/login', login);
app.use('/e/user', user);
app.use('/e/paises', paises);


module.exports = {app};