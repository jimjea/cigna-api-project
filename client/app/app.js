'use strict';

(function() {

	angular.module('cigna', [
		'cigna.auth',
		'cigna.authServices',
		'cigna.userInfo',
		'cigna.userInfoServices'
	])

	.config(['$urlRouterProvider', function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');
	}])

})();
