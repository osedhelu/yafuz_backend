var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var rolesValidos = {
    values: ['EMPRESA', 'USUARIO', 'SUPER'],
    message: '{VALUE} no es un rol permitido'
};
let hecha = new Date();

var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    apellidos: { type: String, required: [true, 'El nombre es necesario'] },
	pais: { type: Schema.Types.ObjectId, ref: 'paises' },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    celular: { type: String, required: [true, 'El nombre es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] }, 
    role: { type: String, required: true, default: 'USUARIO', enum: rolesValidos },
    estado: { type: Boolean, required: false, default: false },
    patrocinador: {type: String},
});


usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('usuarios', usuarioSchema);
