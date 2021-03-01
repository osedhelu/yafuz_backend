let mongoose = require('mongoose');
let Schema = mongoose.Schema;



let position = new Schema ({
	position: {type: String, default: 'YF_'},
	positionReferido: {type:String, default: 'Empresa'},
	usuario: {type: Schema.Types.ObjectId, ref: 'usuarios'},
	nivel:{type:Number, default: 1},
	pais: { type: Schema.Types.ObjectId, ref: 'paises' }
})



module.exports = mongoose.model('posiciones', position);

