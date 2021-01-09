let {config, sql} = require("./sqlConexion");
const util = require('util');

let conn  = sql.createConnection(config)

const query = util.promisify(conn.query).bind(conn);

module.exports = {
    query,
    conn
}
