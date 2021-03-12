const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrasferenciaSchemas = new Schema({
    id_remitente: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'debe asociar un usuario a este registro']
    },
    id_receptor: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, 'debe asociar un usuario a este registro']
    },
    cantidad: { type: Number, required: false },
    btc: { type: String, required: false },
    rate: { type: String, required: false },
    fechayhora: { type: Date, default: new Date() },
});


module.exports = mongoose.model('transacciones', TrasferenciaSchemas);