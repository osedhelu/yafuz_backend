const {validator} = require('../config/config');
const path = require('path');
class Users {
	constructor(
       		id,
		nombre,
		apellidos,
		pais,
		email,
		celular,
		password,
		patrocinador,
		billetera,
		tipo,
		estadojuego,
		estado,
		empresa,
		subid,
		fechayhora,
		fecha,
		activado,
		sfs,
		usuario
	) { 
		
		this.nombre = nombre == undefined && nombre == null ? '' : nombre;
		this.apellidos = apellidos == undefined && apellidos == null ? '' : apellidos;
		this.pais = pais == undefined && pais == null ? '' : pais;
		this.email = email == undefined && email == null ? '' : email;
		this.celular = celular == undefined && celular == null ? '' : celular;
		this.password = password == undefined && password == null ? '' : password;
		this.patrocinador = patrocinador == undefined && patrocinador == null ? '' : patrocinador;
		this.billetera = billetera == undefined && billetera == null ? '' : billetera;
		this.tipo = tipo == undefined && tipo == null ? '' : tipo;
		this.estadojuego = estadojuego == undefined && estadojuego == null ? '' : estadojuego;
		this.estado = estado == undefined && estado == null ? '' : estado;
		this.empresa = empresa == undefined && empresa == null ? '' : empresa;
		this.subid = subid == undefined && subid == null ? '' : subid;
		this.fechayhora = fechayhora == undefined && fechayhora == null ? '' : fechayhora;
		this.fecha = fecha == undefined && fecha == null ? '' : fecha;
		this.activado = activado == undefined && activado == null ? '' : activado;
		this.sfs = sfs == undefined && sfs == null ? '' : sfs;
		this.usuario = usuario == undefined && usuario == null ? '' : usuario;
		
	}
	validate() {
		return new Promise((resolve, reject) => {
				// = []
		var arrME = {}
		let validate = true
	
		let _nombre = this.nombre.split('.').pop();
		let _apellidos = this.apellidos.split('.').pop();
		let _pais = this.pais.split('.').pop();
		let _email = this.email.split('.').pop();
		let _celular = this.celular.split('.').pop();
		let _password = this.password.split('.').pop();
		let _patrocinador = this.patrocinador.split('.').pop();
		let _billetera = this.billetera.split('.').pop();
		let _tipo = this.tipo.split('.').pop();
		let _estadojuego = this.estadojuego.split('.').pop();
		let _estado = this.estado.split('.').pop();
		let _empresa = this.empresa.split('.').pop();
		let _subid = this.subid.split('.').pop();
		let _fechayhora = this.fechayhora.split('.').pop();
		let _fecha = this.fecha.split('.').pop();
		let _activado = this.activado.split('.').pop();
		let _sfs = this.sfs.split('.').pop();



		if(_nombre == 'error'){
			arrME.nombre = path.parse(this.nombre).name
			this.nombre = ""
			validate = false
		}
		if(_apellidos == 'error'){
			arrME.apellidos = path.parse(this.apellidos).name
			this.apellidos = ""
			validate = false
		}
		if(_pais == 'error'){
			arrME.pais = path.parse(this.pais).name
			this.pais = ""
			validate = false
		}
		if(_email == 'error'){
			arrME.email = path.parse(this.email).name
			this.email = ""
			validate = false
		}
		if(_celular == 'error'){
			arrME.celular = path.parse(this.celular).name
			this.celular = ""
			validate = false
		}
		if(_password == 'error'){
			arrME.password = path.parse(this.password).name
			this.password = ""
			validate = false
		}
		if(_patrocinador == 'error'){
			arrME.patrocinador = path.parse(this.patrocinador).name
			this.patrocinador = ""
			validate = false
		}
		if(_billetera == 'error'){
			arrME.billetera = path.parse(this.billetera).name
			this.billetera = ""
			validate = false
		}
		if(_tipo == 'error'){
			arrME.tipo = path.parse(this.tipo).name
			this.tipo = ""
			validate = false
		}
		if(_estadojuego == 'error'){
			arrME.estadojuego = path.parse(this.estadojuego).name
			this.estadojuego = ""
			validate = false
		}
		if(_estado == 'error'){
			arrME.estado = path.parse(this.estado).name
			this.estado = ""
			validate = false
		}
		if(_empresa == 'error'){
			arrME.empresa = path.parse(this.empresa).name
			this.empresa = ""
			validate = false
		}
		if(_subid == 'error'){
			arrME.subid = path.parse(this.subid).name
			this.subid = ""
			validate = false
		}
		if(_fechayhora == 'error'){
			arrME.fechayhora = path.parse(this.fechayhora).name
			this.fechayhora = ""
			validate = false
		}
		if(_fecha == 'error'){
			arrME.fecha = path.parse(this.fecha).name
			this.fecha = ""
			validate = false
		}
		if(_activado == 'error'){
			arrME.activado = path.parse(this.activado).name
			this.activado = ""
			validate = false
		}
		if(_sfs == 'error'){
			arrME.sfs = path.parse(this.sfs).name
			this.sfs = ""
			validate = false
		}
		

		// module.exports = {arrME}
		if(validate){
			resolve(validate)
		}else {
			reject(arrME) 
		}
	
		})	
	}
  }

  module.exports = {Users, validator}

  
  
