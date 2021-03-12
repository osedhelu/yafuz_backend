class Message {
	constructor(uid, nombre, message) {
		this.uid 	 = uid,
		this.nombre	 = nombre,
		this.message = message
	}
}


class chatModels {
	constructor() {
		this.message = [];
		this.user = {};
		this.MessagePrivado = [];
	}
	get ultimos10(){
		this.message = this.message.splice(0,10);
		return this.message 
	}
	get UserArr() {
		return Object.values(this.user)
	}
	sendMessage(uid, nombre, message) {
		this.message.unshift(
			new Message(uid, nombre, message)
		)
	}
	connetUser(user) {
		this.user[user._id] = user
	}
	desconectarUsuario(_id) {
		delete this.user[_id];
	}
}


module.exports = { chatModels }