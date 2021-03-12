const express = require("express");
const { r } = require('../config/config');
const { query } = require('../db/consultar.db');
const shemaPaises = require('../models/paises.model');
const {Paisjson} = require('../db/paises')


const router = new express.Router();

router.get('/', async(req, res) => {
	try {
        let aa = await shemaPaises.find({});
        if(aa.length === 0){
            let save = await shemaPaises.create(Paisjson);
            return r._200(res, save)
        }else{
            return r._200(res, aa)
        }        
    } catch (err) {
        r._400(res, err)
    }
})
router.get('/:iso', (req, res) => {
	let iso = req.params.iso;
	(async() => {
		try {
			let data = await query(`select * from paises where name LIKE "%${iso}%"`);
			return r._200(res, data);
		}catch(err) {
			return r._400(res, err);
		}
	})()
})
module.exports = router;
