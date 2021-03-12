const { SaldosModels } = require("../my-models");

let SaldosController = async (socket, user, io) => {
	socket.join(user._id)
	let model = new SaldosModels(user._id)

	socket.emit('getSaldos', await model.saldo())
	socket.on('realizarPago', async({id, valor, message = 'recarga'}, callback) => {
		try {
			let resp = await model.transferrirSaldo(id,valor, message);
			if(resp) {
				socket.emit('getSaldos', await model.saldo())
				console.log(resp);
				callback(resp)
			}
		} catch (err) {
			console.log(err);
			callback('algo salio  mal')
		}
	})


	socket.emit('getTransaccionAll', await model.getTransion())
}

module.exports = {SaldosController}