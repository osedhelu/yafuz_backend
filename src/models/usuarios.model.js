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
	pais: {
        type: Schema.Types.ObjectId,
        ref: 'paises',
        required: true, 
        default: null
    },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    celular: { type: Number, required: [true, 'El nombre es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] }, 
    patrocinador: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        default: '600f7839bf51c32a70fd1b0c'
    },
    billetera: { type: String, required: false },
    role: { type: String, required: true, default: 'USUARIO', enum: rolesValidos },
    estadojuego: { type: String, required: true,  default: '1' },
    estado: { type: String, required: true, default: '0' },
    empresa: { type: String, required: true, default: '1'  },
    subid: { type: String, required: true, default: '0'  },
    fechayhora: { type: Date, required: false },
    fecha: { type: Date, required: true, default: hecha },
    activado: { type: String, required: true, default: '0' },
    sfs: { type: String, required: true, default: '0' }
    // email: ,
    // password: ,
    // img: { type: String, required: false },
    // role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);
