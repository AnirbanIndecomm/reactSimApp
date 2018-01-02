var http = require('http');
var module= require('./modules.js')

http.createServer(function (req, res) {
	debugger
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write("The date and time are currently: " + module.myDateTime());
    res.end('Computing high Quality');
}).listen(3333);