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
    cantidad: { type: Number, required: true },
    btc: { type: Date, required: true },
    rate: { type: String, required: true },
    fechayhora: { type: Date, required: true },
    fecha: { type: Date, required: true },
});


module.exports = mongoose.model('transferencias', TrasferenciaSchemas);