// This file would normally establish a connection to the database
// It also exports app and express methods to handle middleware and routing in a separate file

'use strict';

var express = require('express');

var app = express();

// Instantiates our middleware's exposed method
require('./config/middleware.js')(app, express);

module.exports = app;
