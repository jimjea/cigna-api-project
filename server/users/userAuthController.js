'use strict';

var http = require('http');

module.exports = {

  authentication: function(req, res) {
  	var options = {
      'method': 'GET',
  	  'host': 'test-api.cigna.com',
  	  'path': '/security/auth/oauth/v2/authorize?client_id=36d0694d-e0a1-410f-9210-cca113cd00ac&scope=biometrics_read+profile+openid&response_type=code&redirect_uri=http://localhost:8000&nonce=031200026', // to be put into keys file later
  	};

  	var request = http.request(options, function(response) {
  		res.send(response.headers.location);
  	}).on('error', function(e) {
  	  console.log("Got error: " + e.message);
  	});

    request.end();

  },

  getToken: function(req, res) {
    var secret = '467bffbe-9f9a-41ed-b3c1-3bae872a5e54'; // to be put into keys file later
    var code = req.body.code;

    var options = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      'host': 'test-api.cigna.com',
      'path': '/security/auth/oauth/v2/token?client_id=36d0694d-e0a1-410f-9210-cca113cd00ac&client_secret=' + secret +'&grant_type=authorization_code&code=' + code + '&redirect_uri=http://localhost:8000',
    };

    var request = http.request(options, function(response) {
      console.log(response.statusCode);
      res.send(response.headers.location);
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

    request.end();
  }
  
};
