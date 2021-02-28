const {app} = require('./rute.config.js');
const http = require('http'); 
const serverHttp = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(serverHttp);
io.on('connection', (socket) => {
  console.log('Conectado');
  io.emit('new-message', "Conectado al Servidor");
})

module.exports = {serverHttp}