'use strict';

var http = require('http');
var https = require('https');

module.exports = {

  authentication: function(req, res) {
  	var options = {
  	  host: 'test-api.cigna.com',
  	  path: '/security/auth/oauth/v2/authorize?client_id=36d0694d-e0a1-410f-9210-cca113cd00ac&scope=biometrics_read+profile+openid&response_type=code&redirect_uri=http://localhost:8000&nonce=031200026',
  	};

  	http.get(options, function(response) {
  		res.send(response.headers.location);
  	}).on('error', function(e) {
  	  console.log("Got error: " + e.message);
  	});

  },

  getToken: function(req, res) {
    
  }



};
