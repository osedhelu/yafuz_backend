const { TicketModels } = require('../my-models');
let tikect = new TicketModels()

let ticketController = (socket) => {

    // ____________________________
    // ____________________________
	socket.on('siguiente-ticket', (payload, callback) => {
        const siguiente = tikect.siguiente();
        callback(siguiente)
        //TODO: notificar un nuevo ticket pendiente
      });
    // ____________________________
    // ____________________________
    socket.on('atender-ticket', ({desktop}, callback) => {
      if(!desktop){
        return callback({
          ok: false,
          message: 'El desktop es requerido'
        })
        
      }
      let ticket01 = tikect.atenderTicket(desktop)
      if(!ticket01) {
        callback({
          ok: false,
          message: 'No tienes tickes pendientes'
        })
      }else {
        callback({
          ok: true,
          result: ticket01
        })
      }
      
    });

    // ____________________________
    // ____________________________


    socket.emit('state-actual', tikect.ultimos4)

    socket.emit('ultimo-ticket', tikect.ultimo)

    socket.on('get-menssage',  (peyload, fn) => {
      
      fn({eviado:peyload.message, id})
      socket.broadcast.emit('get-menssage', peyload)
    });
    socket.on('get-saldo',  async (peyload, fn) => {
      try {
        console.log(peyload);
        let saldo = await schemaSaldo.findOne({id_usuario: peyload})
        fn(saldo)
      } catch (error) {
        fn({err: error, message:'Salio algo mal'})
      }
    });

}


module.exports = {ticketController}

