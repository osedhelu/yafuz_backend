require('dotenv').config()
const Server = require('./src/config/setting.config');
const server = new Server()
server.listen();