let {app} = require('./setting.config');
const example = require('../Routers/example.router');
const login = require('../Routers/login.router');
const user = require('../Routers/users.router');

app.use('/api', example);
app.use('/api/login', login);
app.use('api/user', user);


module.exports = {app};