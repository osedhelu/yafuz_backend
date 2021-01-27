var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var paisesSchema = new Schema({
    nombre: { type: String, required: false },
    name: { type: String, required: false },
    nom: { type: String, required: false },
    iso2: { type: String, required: false },
    iso3: { type: String, required: false },
    phone_code: { type: String, required: false },
   
});


module.exports = mongoose.model('paises', paisesSchema);