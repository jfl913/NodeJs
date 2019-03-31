'use strict';

const http = require('http');
const server = http.createServer(function (request, response) {
    console.log(request.method + ": " + request.url);
    response.writeHead(200, {'content-Type': 'text/html'});
    response.end('<h1>Hello junfeng.li!</h1>');
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080');

var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));