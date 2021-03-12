const { chatModels } = require('../my-models');
let model = new chatModels()

let chatController = (socket, user, io) => {

	socket.on('removeSeccion', () => {
		socket.close;
		socket.disconnect();
	});
	socket.join(user._id)
	model.connetUser(user)
	io.emit('message-privado',)
	io.emit('user-conexion', model.UserArr)

	socket.on('disconnect', (id) => {
		if (model.UserArr.length > 1) {
			if ('ping timeout' !== id) {
				model.desconectarUsuario(user._id)
				socket.broadcast.emit('user-conexion', model.UserArr)
				console.log('usuario desconectado', user.nombre);
			}
		}
		console.log('ping timeout' !== id);
	})
	socket.emit('todos-menssage', model.ultimos10)
	let messagedata = []
	socket.on('enviar-message', ({ message, id }) => {

		if (id) {
			messagedata.push(message)
			let hoy = new Date()
			let hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`
			socket.to(id).emit('message-privado', { _id: user._id, name: user.nombre + ' ' + user.apellidos, time: hora, message })
			//   model.UserArr.message = message

		} else {
			console.log('Nooo');
			model.sendMessage(user._id, `${user.nombre} ${user.apellidos}`, message)
			io.emit('todos-menssage', model.ultimos10)
		}
		io.emit('user-conexion', model.UserArr)

	})
}

module.exports = { chatController }