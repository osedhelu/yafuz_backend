// const mongo_validator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
let schema = mongoose.Schema;


let saldo_btc = new schema({
	id_usuario: { type:String, ref: 'usuarios' }
	,saldo_usd: { type: String, required: false}
	,saldo_btc: {type : String, required: false}
})

module.exports = mongoose.model('saldo_btcs', saldo_btc);