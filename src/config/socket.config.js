const {app} = require('./rute.config.js');
const serverHttp = require('http').Server(app)
let io = require('socket.io')(serverHttp)
const message = [];

io.on('connection', (client) => {
  // client.on('disconect', (q) => {

	
  //   console.log('user disconnected', q);
  // });
  // client.on('send-message', (data) => {
	//   console.log('conectado', client.id);
  //   message.push(data)
  //   client.emit('text-event', message)
  //   client.broadcast.emit('text-event', message)
  // })
})
app.locals.io = io

module.exports = {serverHttp}