const {app} = require('./rute.config.js');
const serverHttp = require('http').Server(app)
let io = require('socket.io')(serverHttp)
const mongoose = require('mongoose');
const  {env}= require('../../env');
//   (() => {
    
// mongoose.connect(env.mongodbURL_local, {
// 	useNewUrlParser: true, 
// 	useUnifiedTopology: true,
// 	useCreateIndex: true
// } , (err) => {
// 	if (err) throw err;
// 	console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
// });
//   })()
const message = [];

io.on('connection', (client) => {
  socket.on('disconect', (q) => {

	
    console.log('user disconnected', q);
  });
  socket.on('send-message', (data) => {
	  console.log('conectado', socket.id);
    message.push(data)
    socket.emit('text-event', message)
    socket.broadcast.emit('text-event', message)
  })
})
app.locals.io = io

module.exports = {serverHttp}