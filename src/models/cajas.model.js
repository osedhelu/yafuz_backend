var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CajasSchemas = new Schema({
    // nombre: { type: String, required: [true, 'El nombre es necesario'] },
    usuario: { 
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'debe asociar un usuario a esta caja'] },
    p1: {
        type: String,
		required: false
    },
    p2: {
        type: String,
		required: false
     },
    p3: { 
        type: String,
		required: false
     },
    nivel: { type: String, required: false },
    valor: { type: String, required: false },
    fecha: { type: Date, required: false },
    estado: { type: String, required: false },
    activo: { type: String, required: false },
    name: { type: String, required: false },
    // usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    // hospital: {
        // type: Schema.Types.ObjectId,
        // ref: 'Hospital',
		// required: [true, 'El id hospital esun campo obligatorio ']
		// 
		
    // }
});


module.exports = mongoose.model('cajas', CajasSchemas);