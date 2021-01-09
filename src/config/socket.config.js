const {app} = require('./rute.config.js');
const serverHttp = require('http').Server(app)
let io = require('socket.io')(serverHttp)

  
const message = [];

io.on('connection', (socket) => {
  console.log("cone", socket.id)
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
  socket.on('send-message', (data) => {
    message.push(data)
    socket.emit('text-event', message)
    socket.broadcast.emit('text-event', message)
  })
})
app.locals.io = io

module.exports = {serverHttp}