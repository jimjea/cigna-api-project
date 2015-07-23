'use strict';

var http = require('http');
var request = require('request');
var querystring = require('querystring');

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

    var post_data = querystring.stringify({
      'client_id': '36d0694d-e0a1-410f-9210-cca113cd00ac',
      'client_secret': '467bffbe-9f9a-41ed-b3c1-3bae872a5e54',
      'code': '0f7f9ca5-9dd7-45c7-9ec5-6e73fd784ea9',
      'grant_type': 'authorization_code',
      'redirect_uri': 'http://localhost:8000'
    })

    var options = {
      host: 'test-api.cigna.com',
      path: '/security/auth/oauth/v2/token/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
      },
      body: post_data
    };

    var request = http.request(options, function(response) {
      console.log(response.body);
      // res.send(response.headers.location);
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

    request.write(post_data);
    request.end();
  }

};
