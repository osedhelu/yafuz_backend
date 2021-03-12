const {ticketController}  = require('./ticket.controller');
const {chatController} = require('./chatController');
const {SaldosController} = require('./saldo.Controller');
module.exports = {
	chatController,
    ticketController,
	SaldosController
}

