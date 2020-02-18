let mongoose = require('mongoose');
let validator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let rolesValidos = {
    values: ['CC', 'TI'],
    message: '{VALUE} no es un rol Permitido'
}
let StudenSchema = new Schema({
    name: {type: String, unique: false, required: [true, 'El nombre es Necesario']},
    email:{type: String, unique:true, required: [true, 'El correo es Necesario']},
    TypeDocument: {type: String, default: 'CC', enum: rolesValidos},
    cedula: {type: Number, required: [true, 'La cedula es requerida']},
    NumCourse: {type: Number, required: [true, 'El numero de ficha es necesario']},
    titleCourse: {type: String, required: false},
    observacion: {type: String, required: false},
    img: {type: String, required: false},
})
StudenSchema.plugin( validator, {message: '{PATH} debe ser unico'} );
module.exports = mongoose.model('studen', StudenSchema);