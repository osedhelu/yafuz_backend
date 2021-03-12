const path = require('path');
const fs = require('fs');
class ticketInter {
	constructor(xnumber, desktop){
		this.xnumber = xnumber;
		this.desktop = desktop;
	}
}

class TicketModels {
	constructor() {
		this.ultimo = 0;
		this.hoy = new Date().getDate(); //11
		this.tickets = [];
		this.ultimos4 = [];
		this.init();
	}
	get toJson() {
		return {
			ultimo: this.ultimo,
			hoy: this.hoy,
			tickets: this.tickets,
			ultimos4: this.ultimos4,
		}
	}
	init() {
		let {ultimo, hoy, tickets, ultimos4} = require('../db/data.json');
		if(hoy === this.hoy){
			this.tickets = tickets;
			this.ultimo = ultimo;
			this.ultimos4 = ultimos4
		}else {
			this.saveDB()
		}

	}
	saveDB(){
		const dbpath = path.join(__dirname, '../db/data.json');
		fs.writeFileSync(dbpath, JSON.stringify(this.toJson) )
	}
	siguiente() {
		this.ultimo += 1;
		const ticket = new ticketInter(this.ultimo, null);
		this.tickets.push(ticket);
		this.saveDB()
		 return `Ticket ${ticket.xnumber}`
	}
	atenderTicket(desktop) {
		if(this.tickets.length === 0) {
			return null;
		}
		const ticket = this.tickets.shift();
		ticket.desktop = desktop;
		this.ultimos4.unshift(ticket);
		if(this.ultimos4.length > 4){
			this.ultimos4.splice(-1,1);
		}
		this.saveDB();
		return ticket;
	}
}

module.exports = {TicketModels}