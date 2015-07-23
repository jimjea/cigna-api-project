
'use strict';

// Modularizes the methods for handling user requests
var userController = require('./userAuthController.js');

module.exports = function(app) {
	app.route('/userAuth')
	  .get(userController.authentication);

};
