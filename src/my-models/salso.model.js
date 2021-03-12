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
	async transferrirSaldo(id, value, message) {
		try {
			let user = await SaldoSchema.findOne({ id_usuario: this.id})	
			if(message == 'recarga'){
				user.cantidad_usd += value
			}
			if(message == 'transferir'){
				user.cantidad_usd -= value
				let reset = await SaldoSchema.findOne({ id_usuario: id })
				reset.cantidad_usd += value
				await reset.save()
			}
			let addTrans = new TransationSchema({
				id_remitente: this.id,
				id_receptor: id,
				cantidad: value,
				btc: value,
				rate: message
			})
			await addTrans.save()

			await user.save();
			return true

		} catch (err) {
			console.log(err);
			return new Error(err)
		}
	}
	async getTransion() {
		return await TransationSchema.find({});
	}
}

module.exports = { SaldosModels }