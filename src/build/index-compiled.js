const http = require('http');

const app = require('../app');

const port = require('../config');

const server = http.createServer(app);
server.listen(port);
console.log(`port listening on 3000`);
