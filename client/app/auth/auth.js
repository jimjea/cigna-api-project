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
}])