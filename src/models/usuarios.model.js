var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var rolesValidos = {
    values: ['EMPRESA', 'USUARIO', 'SUPER'],
    message: '{VALUE} no es un rol permitido'
};


var usuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    apellidos: { type: String, required: [true, 'El nombre es necesario'] },
	pais: {
        type: Schema.Types.ObjectId,
        ref: 'paises',
        required: [true, 'El id Pais esun campo obligatorio ']
    },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    celular: { type: String, required: [true, 'El nombre es necesario'] },
    usuario: { type: String, required: [true, 'El nombre es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] },
    patrocinador: { type: String, required: [true, 'El nombre es necesario'] },
    billetera: { type: String, required: [true, 'El nombre es necesario'] },
    tipo: { type: String, required: [true, 'El nombre es necesario'] },
    estadojuego: { type: String, required: [true, 'El nombre es necesario'] },
    estado: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    empresa: { type: String, required: [true, 'El nombre es necesario'] },
    subid: { type: String, required: [true, 'El nombre es necesario'] },
    fechayhora: { type: String, required: [true, 'El nombre es necesario'] },
    fecha: { type: String, required: [true, 'El nombre es necesario'] },
    activado: { type: String, required: [true, 'El nombre es necesario'] },
    sfs: { type: String, required: [true, 'El nombre es necesario'] },
    // email: ,
    // password: ,
    // img: { type: String, required: false },
    // role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);

