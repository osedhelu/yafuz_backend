
const {env} = require('./src/config/env');
const {serverHttp} = require('./src/config/socket.config');
serverHttp.listen(env.PORT,env.LOCALHOST, () => console.log(`Server is up on port ${env.PORT}`));
