angular.module('cigna.auth', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/auth/auth.html',
			controller: 'AuthController'
		})
}])

.controller('AuthController', ['$scope', function($scope) {
	
}])