

const {env} = require('../../env');
const mongoose = require('mongoose');
mongoose.connect(env.mongodbURL_local(), {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useCreateIndex: true
} , (err) => {
	if (err) throw err;
	console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
}); 