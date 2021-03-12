const mongoose = require('mongoose');
const Scheme = mongoose.Schema;




let nivelesScheme = new Scheme({
	ID_user: {type: String, required:true},
	name:{type:String, required: false}
}) 