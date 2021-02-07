
const {env} = require('./env');
const {serverHttp} = require('./src/config/socket.config');
serverHttp.listen(env.PORT,env.LOCALHOST, () => console.log(`Server is up on port  ${env.PORT}  \x1b[32m%s\x1b[0m`, `online`));