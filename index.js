'use strict';

var connect = require('connect');
var http = require('http');
var app = connect();

var loader = require('./src/loader');

var router = require('./src/router')(loader);

router.route(app);


http.createServer(app).listen(3000);
