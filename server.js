var http = require('http');
var app = require('./app');


http.createServer(app.handleRequest).listen(1337);
console.log('locol host server is running.....');