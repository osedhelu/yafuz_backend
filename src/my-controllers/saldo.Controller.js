const { SaldosModels } = require("../my-models");

let SaldosController = async (socket, user, io) => {
	socket.join(user._id)
	let model = new SaldosModels(user._id)

	socket.emit('getSaldos', await model.saldo())
	socket.on('realizarPago', async({id, valor}, callback) => {
		try {
			let resp = await model.transferrirSaldo(id,valor, 'recarga');
			if(resp) {
				socket.emit('getSaldos', await model.saldo())
				console.log(await model.saldo());
				callback(resp)
			}
		} catch (err) {
			callback(err)
		}
	})


	socket.emit('getTransaccionAll',)
}

module.exports = {SaldosController}