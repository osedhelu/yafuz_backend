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
    this.middlewares();
    this.io       = require('socket.io')(this.serverIO, {
      handlePreflightRequest: (req,res) => {
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "http://localhost:4200",
          "Access-Control-Allow-Methods": "GET,POST",
          "Access-Control-Allow-Headers": "x-Token",
          "Access-Control-Allow-Credentials": true
        });
        res.end();
      }
    });
    socketConexion(this.io)
    this.conexionDB();
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