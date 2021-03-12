const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dia = new Date();
let recarga = new Schema({
	id_usuario:{
		type: Schema.Types.ObjectId,
		ref: 'usuarios',
		required: [true, 'debe asociar un usuario a este registro']
	}
	,id_invoice:{type: String, required: false}
	,cantidad_usd:{type: Number, required: false}
	,cantidad_btc:{type: Number, require: false}
	,rate:{type: String, require: false}
	,estado:{type: Boolean, require: false}
	,fechayhota:{type: Date, default: dia, required: false}
});
module.exports = mongoose.model('recargas', recarga);