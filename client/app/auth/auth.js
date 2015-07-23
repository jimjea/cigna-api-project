angular.module('cigna.auth', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/auth/auth.html',
			controller: 'AuthController'
		})
}])

.controller('AuthController', ['$scope', 'Auth', '$window', function($scope, Auth, $window) {
	
	$scope.goToCigna = function() {
		Auth.userLogin().success(function(data) {
			$window.location.href = data;
		})
	};

	var code;
	var parseCode = function(url) {
		var output = '';
		var indexStart = url.indexOf('code=') + 5;
		for (var i = indexStart; i < url.length; i++) {
			if (url[i] == '&') {
				return output;
			} else {
				output += url[i];
			}
		}
		return null;
	};

	if ($window.location.href.indexOf('code=') !== -1) { // handles data retrieval when proper code is sent back from URL, CHANGE this
		code = parseCode($window.location.href);
		Auth.getUserData({code: code})
			.success(function(data) {
				console.log(data);
			})
	}
	

}])