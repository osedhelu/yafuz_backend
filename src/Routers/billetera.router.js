const express = require("express");
const { r } = require('../config/config');
const schemaSaldo = require('../models/btc_saldo.model');
var Usuario = require('../models/usuarios.model');
const router = new express.Router();

router.get('/:id', async(req, res) => {
	try {
        let id = req.params.id;
        let update = await schemaSaldo.findOne({id_usuario: id});
        if(!update) {
            let newUserSaldo = new schemaSaldo({
                id_usuario: id,
                saldo_usd: 0,
                saldo_btc: 0
            })
            console.log(newUserSaldo);
            let nuevo = await newUserSaldo.save()
            return r._200(res, nuevo)
        }else {
            return r._200(res, update)

        }
        
    } catch (error) {
        return r._400(res, error)
        
    }
})
router.post('/:id', (req, res) => {
	let id = req.params.id;

    
    return r._200(res, id)
})
module.exports = router;
