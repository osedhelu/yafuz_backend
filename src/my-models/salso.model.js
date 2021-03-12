const SaldoSchema = require('../models/recargas.model.js');
const TransationSchema = require('../models/transferencias.model');

class SaldosModels {
	constructor(id) {
		this.id = id;
	}
	async saldo() {
		try {
			return await SaldoSchema.findOne({ id_usuario: this.id })			
		} catch (err) {
			console.log(err);
		}
	}
	transferrirSaldo() {
		
	}
}

module.exports = { SaldosModels }