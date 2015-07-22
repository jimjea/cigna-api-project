'use strict';

angular.module('cigna', [
	'cigna.auth'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
}])
