let {query, conn} =  require('../db/consultar.db');
const http = require('axios');
let calcular_saldo = async(id) => {
	let usd = 0;
	let btc = 0;
	let	 sql1 = `SELECT * FROM btc_saldos WHERE id_usuario = ${id}`;
	let	 sql2 = `SELECT * FROM ganancias WHERE usuario = ${id}`;
	let	 sql7 = `SELECT * FROM cajas where usuario = '${id}' and nivel = '1' and estado = '0'`;
	let	 sql3 = `SELECT * FROM usos WHERE usuario = ${id}`;
	let	 sql4 = `SELECT max(valor) as maxn, max(nivel) as maxniv FROM cajas where usuario = ${id}`;
	let sql8 = `SELECT count(id) as clon  FROM usuarios where patrocinador = ${id} and estadojuego = '1'`;
	let resp4 = await query(sql4);
	let	 sql6 = `SELECT sum(g.cantidad) as aho 
	FROM ganancias g, usos u 
	where g.usuario = ${id}
						and g.cantidad = '${resp4[0].maxn}' 
						and g.tipo = 1 
						and g.usuario = u.usuario 
						and g.cantidad = u.cantidad 
						and g.fechayhora != u.fechayhora 
						and u.detalle != 'Ciclaje nivel ${resp4[0].maxniv}' 
						and u.detalle = 'Compra inicial nivel ${resp4[0].maxniv}'`;
						
	let resp = await query(sql1);
	let resp2 = await query(sql2);
	let resp3 = await query(sql3);
	let resp6 = await query(sql6);
	let resp7 = await query(sql7);
	let resp8 = await query(sql8);
		resp.forEach(item => {
			usd += item.saldo_usd ? item.saldo_usd: 0;
			btc += item.saldo_btc ? item.saldo_btc: 0;
		});
		resp2.forEach(item => {
			usd += item.cantidad;
			btc += item.btc;
		})
		resp3.forEach(item => {
			usd += item.cantidad;
			btc += item.btc;			
		})
		if(resp.length < 1) {
			
		}
		return {
			usd,
			btc,
			data: resp6[0],
			cajas: resp7,
			data1: resp8[0]
		} 

}


module.exports = {
	calcular_saldo
}
