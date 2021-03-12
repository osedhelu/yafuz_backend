const { SaldosModels } = require("../my-models");

let SaldosController = async (socket, user, io) => {
	let model = new SaldosModels(user._id)
	socket.emit('getSaldos', await model.saldo())
	
}

module.exports = {SaldosController}