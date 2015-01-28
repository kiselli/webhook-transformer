'use strict';

var http = require('http');

var run = function(){

	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end("Hello world");
	}).listen(9615);

}




module.exports = {
	run:run
};