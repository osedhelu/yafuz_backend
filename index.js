
const {env} = require('./env');
const {serverHttp} = require('./src/config/socket.config');
const {calcular_saldo} = require('./src/function/pagos.fn')
serverHttp.listen(env.PORT,env.LOCALHOST, () => console.log(`Server is up on port  ${env.PORT}  \x1b[32m%s\x1b[0monline`));



// // (async() => {
// 	try {
// 		let resp = await calcular_saldo(1);
// 		console.log(resp)
// 	}
// 	catch(err) {
// 		console.log(err)
// 	}
// })()
