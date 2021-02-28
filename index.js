
const {env} = require('./env');
const {serverHttp} = require('./src/config/socket.config');
require('./src/db/sqlConexion')
serverHttp.listen(env.PORT,env.LOCALHOST, () => console.log(`Server is up on port  ${env.PORT}  \x1b[32m%s\x1b[0m`, `online`));

// // require('./src/function/treeList.fn')

// // console.log('________');
// // console.log('________');
// // console.log('________');
// // console.log('________');
// // let array = [
// // {id: '001', parent:'00'},
// // {id: '002', parent:'001'},
// // {id: '003', parent:'001'},
// // {id: '004', parent:'001'},
// // {id: '005', parent:'002'},
// // {id: '006', parent:'002'},
// // {id: '007', parent:'002'},
// // {id: '008', parent:'004'},
// // {id: '009', parent:'005'},
// // {id: '010', parent:'005'},
// // {id: '011', parent:'006'},
// // {id: '012', parent:'006'},
// // {id: '013', parent:'006'},
// // {id: '014', parent:'007'},
// // {id: '015', parent:'008'},
// // {id: '016', parent:'008'},
// // {id: '017', parent:'008'},
// // {id: '018', parent:'011'},
// // {id: '019', parent:'011'},
// // {id: '020', parent:'012'},	
// // ]

// // array.map(resp => {
// // 	console.log(resp);
// // })	


// var aLetras = new Array('aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll');
// var aNumeros = new Array('1', '2', '3');
// var cLetra = aLetras[Math.floor(Math.random()*aLetras.length)];
// var cNumero = aNumeros[Math.floor(Math.random()*aNumeros.length)];
// console.log(cLetra);