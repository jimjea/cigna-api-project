// This file starts our server, currently deferring to locahost:8000 if a process port and url are not defined

'use strict';

var app = require('./server/server.js');

var port = process.env.PORT || 8000;
var url = process.env.URL || 'localhost';


app.listen(port, url);

console.log('Listening on', url, ':', port);
