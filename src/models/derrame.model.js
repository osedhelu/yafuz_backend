var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let SchemaDerrame = new Schema({
	usuario: {type: String, required: false},
	puesto1: {type: Boolean, default:true},
	puesto2: {type: Boolean, default:false},
	puesto3: {type: Boolean, default:false},
})

module.exports =  mongoose.model('derrames', SchemaDerrame);