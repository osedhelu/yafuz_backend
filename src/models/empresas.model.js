const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    tipoidentificacion: { type: String, required: true },
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    celular: { type: String, required: true },
    whatsapp: { type: String, required: true },
    direccion: { type: String, required: true },
    fecha: { type: Date, required: true },
    fechamodificado: { type: Date, required: true },
    estado: { type: Number, required: true },
});

module.exports = mongoose.model("empresas", EmpresaSchema);
