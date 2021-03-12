let express = require("express");
const {dbConnection} = require('../db/mongoConfig.js');
let bodyParser = require('body-parser')
const {env} = require('../../env');
const { urlRouter } = require("./rute.config.js");
const {socketConexion} = require('./socket.config');

class Server {
  constructor() {
    this.app      = express();
    this.port     = env.PORT;
    this.serverIO = require('http').createServer(this.app);
    this.io       = require('socket.io')(this.serverIO);
    socketConexion(this.io)
    this.conexionDB();
    this.middlewares();
    urlRouter(this.app)
  }
  async conexionDB() {
    await dbConnection()
  }
  middlewares() {
      this.app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, token');
          next();
      });
      this.app.use(express.json());
      this.app.use(bodyParser.urlencoded({extended: false}));
      this.app.use(bodyParser.json());

  }
  listen() {
    this.serverIO.listen(this.port,() => {
      console.log(`Servidor Corriendo en el puerto ${this.port}`);
    })
  }
  
}



// let app = express();




module.exports = Server;