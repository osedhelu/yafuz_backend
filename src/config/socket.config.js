const {verifyToken} = require('../function/validateToken.fn');
const SocketIO = require('socket.io');
const schemaSaldo = require('../models/recargas.model');
const { ticketController, chatController, SaldosController } = require('../my-controllers');
//el broadcast nos sirve para emitir un mensajes a todos
const socketConexion = (io) => {
  io.on('connection', async(socket = new SocketIO()) => {
  try {
    console.log(socket.handshake.headers['x-token']);
    let user = await verifyToken(socket.handshake.headers['x-token'])
    chatController(socket, user, io)
    ticketController(socket);
    SaldosController(socket, user, io);
  } catch (error) {
    console.log("<<<Token Errado o vensido >>>",error);
    socket.disconnect();
  }
    // if(!user) {
    //   return 
    // }
    // console.log('se conecto', user.nombre);

   
    

  })
}

module.exports = {socketConexion}