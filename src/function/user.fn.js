const userModel = require('../models/usuarios.model');
const { createCajas } = require('./createCajas.ng');
const SchemaCajas = require('../models/cajas.model');
const SchemaPositon = require('../models/position.model');
const Schemaderrame = require('../models/derrame.model');
const positionModel = require('../models/position.model');
// let getUsuario = () => {
// 	return new Promise((resolve, reject) => {

// 		userModel.find({ role: 'EMPRESA' }).exec(
// 			(err, resp) => {
// 				if (err) {
// 					reject(err)
// 				} else {

// 					resolve(resp[0]._id)
// 				}
// 			})
// 	})
// }

// let totalCajas = (idUser) => {
// 	return new Promise((resolve, reject) => {
// 		SchemaCajas.find({ usuario: idUser })
// 			.exec()
// 			.then((resp) => {

// 				if (resp.length == 0) {
// 					resolve(true)

// 				} else {
// 					resolve(false)
// 				}
// 			})
// 			.catch((err) => {
// 				reject(err)
// 			})
// 	})
// }
// let totalUsuarios = (idUser) => {
// 	return new Promise((resolve, reject) => {
// 		userModel.findById(idUser)
// 			.exec()
// 			.then(async (usuario) => {
// 				if (usuario.email == 'osedhelu@gmail.com') {
// 					usuario.role = 'EMPRESA';
// 					usuario.patrocinador = 'admin'
// 				} else {
// 					if (usuario.patrocinador == 'nuevo') {
// 						usuario.patrocinador = await getUsuario()
// 					}
// 				}

// 				usuario.estado = true;
// 				usuario.save()
// 				resolve(usuario)
// 			})
// 			.catch((err) => {
// 				reject(err)
// 			})
// 	})
// }


// let usuariosCajas = (token) => {
// 	return (async () => {
// 		try {
// 			let { id } = await verifyToken(token);
// 			let aa = await totalUsuarios(id);
// 			let lengthCajas = await totalCajas(id);
// 			let bb = await cargar16caja(lengthCajas, id)
// 			console.log('aa', aa);
// 			console.log('bb', bb);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	})()
// }

let getReferidos = (id) => {
	return new Promise((resolve, reject) => {
		userModel.find({ patrocinador: id })
			.populate('pais', 'nombre phone_code iso2')
			.exec()
			.then(resp => {
				resolve(resp)
			})
			.catch(err => {
				reject(err)
			})
	});
}


let cargar16caja = async() => {
	try {
		let nue = await SchemaCajas.create(createCajas())
		return { message: 'cajas cargadas', nue };
	} catch (error) {
		return new Error({ message: 'Error al cajar las cajas', Error: err })	
	}

}
// _____________________
// 
// 
// ____________________
let CrearRamaAdmin = async (id, pais) => {
	try {
		let totalEmpresa = await SchemaPositon.find({ positionReferido: 'Empresa' })
		if (totalEmpresa.length > 0) {
			return new Error('Solo puede aber una emprea')

		} else {

			let derrame = new Schemaderrame({
				usuario: id,
			})
			let position = new SchemaPositon({
				usuario: id,
				pais
			});
			let update = await userModel.findById({_id: id})
			update.role = 'EMPRESA';
			update.patrocinador = 'admin'
			update.estado = true;
			update.save();

			 await derrame.save()
			 await position.save()
		}
	} catch (error) {
		return new Error('<<<<<__CrearRamaAdmin__>>>>>', + error)
	}
}

let UserNuevopositionandDerrame = async ({ id, item, itemPadre, nivel, pais }) => {
	try {
		let derrame = new Schemaderrame({
			usuario: id,
		})
		let position = new SchemaPositon({
			usuario: id,
			position: item,
			positionReferido: itemPadre,
			nivel: nivel, 
			pais: pais

		});
		let aa = await derrame.save()
		let bb = await position.save()
		console.log(aa);
		console.log(bb);
		return false
	} catch (error) {
		return new Error('<<<<<__positionandDerrame__>>>>>', + error)
	}
}

//Si la una persona se registra por primera vez 
//se le crea una posicio retorna la posicion 1;
let prefijoDerrame = (id) => {

	return new Promise((resolve, reject) => {
		Schemaderrame.findOne({ usuario: id }, (err, resp) => {

			if (err) {
				console.log('<<<<prefijoDerrame>>>>>', "El usuario no exite, Este es el admin ");
				return resolve(err)
			}
			if (resp) {
				if (resp.puesto1 === true) {
					resp.puesto1 = false
					resp.puesto2 = true
					resp.puesto3 = false
					resp.save()

					return resolve('01')
				}
				if (resp.puesto2 === true) {
					resp.puesto1 = false
					resp.puesto2 = false
					resp.puesto3 = true
					resp.save()
					return resolve('02')
				}
				if (resp.puesto3 === true) {
					resp.puesto1 = true
					resp.puesto2 = false
					resp.puesto3 = false
					item = '03'
					resp.save()
					return resolve('03')
				}
			} else {
				reject('Esteman no Exite', id)

			}
		})
	})
}

let buscarDerrane = async (prefijo) => {
	// var regSearch = new RegExp(prefijo + ".*", "i");
	let aa = await SchemaPositon.find({ positionReferido: prefijo });
	if (aa.length <= 2) {
		return true;
	} else {
		return false;
	}
}

// let crearNewPosition = async (referido) => {
// 	console.log('<<<crearNewPosition>>>', referido);	

// 	// return "bien";
// 	let nuevo = {
// 		id: referido.id,
// 		item: referido.hijo,
// 		nivel: referido.nivel + 1,
// 		itemPadre: referido.padre
// 	}
// 	// console.log(nuevo);
// 	return aa;
// }
let savePosition = async (_id, ss, pais) => {
	try {
		// await SchemaPositon.remove()
		// await Schemaderrame.remove()
		// console.log(_id,'->>>>', ss);
		if (ss == 'nuevo') {
			let aa = await SchemaPositon.findOne({ 'positionReferido': 'Empresa' });
			// console.log(aa);
			if (aa) {
				let enconrar = await buscarEspacios(aa, _id, pais);
				// console.log("->>>01_si>>", _id, ss);
				return enconrar;

			} else {
				let posicion = await CrearRamaAdmin(_id, pais)
				console.log(posicion);
				
				return 'es una empresa'
			}


		} else {
			let usuario = await SchemaPositon.findOne({usuario: ss})
			let enconrar = await buscarEspacios(usuario, _id, pais);
			return enconrar;

		}


	} catch (error) {
		console.log("<<<<<_savePosition_>>>>",error);
		return new error
	}
}

let buscarEspacios = async (aa, idNuevo, pais) => {
	try {
		let principal = {
			hijo: '',
			padre: '',
			nivel: aa.nivel
		}

		let z = 0
		let _padre = aa.position;
		let _nuevo = aa.position;
		let usuario = aa.usuario;
		let nivel = aa.nivel;
		labelCancelLoops: while (true) {
			z = 0
			let traerPuesto = await prefijoDerrame(usuario)
			let quepuestos = await buscarDerrane(_nuevo);

			if (_padre === _nuevo) {
				_nuevo += `${traerPuesto}`
			}
			while (true) {
				z += 1;
				if (quepuestos) {
					principal.nivel = nivel + 1;
					principal.padre = _padre;
					principal.hijo = _nuevo;
					break labelCancelLoops;
				}
				let padreNivel = await SchemaPositon.findOne({ position: _nuevo })
				// console.log('El->>ssss3333>>>>',padreNivel);
				
				_padre = padreNivel.position;
				usuario = padreNivel.usuario;
				nivel =   padreNivel.nivel;
				if (z === 3) {
					break;
				}
			}
			// console.log('Bucles externos: ' + x);

			console.log(`->x${_nuevo}=${quepuestos}=${_padre}`);
		}



		let re = {
			id: idNuevo,
			item: principal.hijo,
			itemPadre: principal.padre,
			nivel: principal.nivel,
			pais
		}
		// console.log("->>>>>01 final", re);
		let zz = await UserNuevopositionandDerrame(re)
		return zz



	} catch (Err) {
		console.log("<<<<_buscarEspacios_>>>>", Err);
	}



}

// let nuevaCadenaPosicion = (inicio, id) => {
// 	let prefijo = '';
// 	let totalUser = nivel * ;
// }


module.exports = { savePosition }