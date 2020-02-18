let mongoose = require('mongoose');
let {DBHOST, DBTABLE, color} = require('../config/config.js');
 mongoose.connection.openUri(`mongodb://osedhelu:0sedhelu22_@cluster0-shard-00-00-mpguq.mongodb.net:27017,cluster0-shard-00-01-mpguq.mongodb.net:27017,cluster0-shard-00-02-mpguq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, (err, res) => {
    if(err) throw err;
    console.log(`base de Datos  : ${color.success}`, 'online');
});