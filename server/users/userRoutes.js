
'use strict';

// Modularizes the methods for handling user requests
var userController = require('./userController.js');

module.exports = function(app) {
	
	app.route('/')
	  .get(userController.authentication);

};
