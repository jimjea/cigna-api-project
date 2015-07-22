'use strict';

angular.module('cigna', [
	'cigna.auth',
	'cigna.authServices'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
}])
