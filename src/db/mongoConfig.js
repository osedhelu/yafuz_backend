const mongoose = require('mongoose');
const {env} = require('../../env');



const dbConnection = async() => {

    try {

        await mongoose.connect( env.mongodbURL_local(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}
