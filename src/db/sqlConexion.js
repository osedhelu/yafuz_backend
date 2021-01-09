let sql = require('mysql');
const {env} = require('../config/env');
let config = {
    host: process.env.IP_DB || env.HOST_DB,
    user: process.env.USER_DB || env.USER_DB,
    password: process.env.PASS_DB || env.PASS_DB,
    database: process.env.DATABASE || env.NAME_DB 
}

module.exports = {
    config,
    sql
}
