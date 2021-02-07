const userModel = require('../models/usuarios.model');
const { verifyToken } = require('./validateToken.fn');
const {createCajas} = require('./createCajas.ng');
const SchemaCajas = require('../models/cajas.model');

let getUsuario = () => {
	return new Promise((resolve, reject) => {
	
		userModel.find({role: 'EMPRESA'}).exec(
			(err, resp) => {
				if (err) {
					reject(err)
				} else {
					
					resolve(resp[0]._id)
				}
			})
	})
}

let totalCajas = (idUser) =>  {
	return new Promise((resolve, reject) => {
		SchemaCajas.find({ usuario: idUser })
		.exec()
		.then((resp) => {

			if(resp.length == 0){
				resolve(true)

			}else {
				resolve(false)
			}
		})
		.catch((err) => {
			reject(err)
		})
	})
}
 let totalUsuarios = (idUser) => {
	return new Promise((resolve, reject) => {
		userModel.findById(idUser)
		.exec()
		.then(async(usuario) => {
			if(usuario.email == 'osedhelu@gmail.com'){
                usuario.role = 'EMPRESA';
				usuario.patrocinador = 'admin' 
            }else {
				if(usuario.patrocinador == 'nuevo'){
					usuario.patrocinador = await getUsuario()
				}
			}
            
            usuario.estado = true;
            usuario.save()
			resolve(usuario)
		})
		.catch((err) => {
			reject(err)
		})
	})
 }

 let cargar16caja = (status, id) => {
	 console.log("cakas_<<<", status, id);
	 return new Promise((resolve, reject) => {
		if (status) {
			SchemaCajas.create(createCajas(id), (err, info) => {
				if (err) {
					reject({message: 'Error al cajar las cajas', Error: err})
				}else {
					resolve({message: 'cajas cargadas', info})
				}
			})


		}
		else {
			reject({message: 'este usuario ya tiene las 17 cajas'})
			
		}
	 })
 }
let usuariosCajas = (token) => {
	return (async() => {
		try{
			let {id} = await verifyToken(token);
			
			let aa = await totalUsuarios(id);
			let lengthCajas = await totalCajas(id);
			let bb = await cargar16caja(lengthCajas, id)
			console.log('aa', aa);
			console.log('bb', bb);
		}catch(err) {
			console.log(err);
		}
	})()
}


let getReferidos = (id) => {
	return new Promise((resolve, reject) => {
		userModel.find({patrocinador: id})
		.exec()
		.then(resp => {
		resolve(resp)
		})
		.catch(err => {
			reject(err)	
		})
	});
}


module.exports = { getUsuario, usuariosCajas, getReferidos }