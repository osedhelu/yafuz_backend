const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsosSchemas = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'debe asociar un usuario a este registro']
    },
    detalles: { type: String, required: true },
    cantidad: { type: Number, required: true },
    btc: { type: Date, required: true },
    rate: { type: String, required: true },
    fechayhora: { type: Date, required: true },
    fecha: { type: Date, required: true },
    estado: {type: Number, required: true}
});


module.exports = mongoose.model('usos', UsosSchemas);