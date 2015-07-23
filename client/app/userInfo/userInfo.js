angular.module('cigna.userInfo', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('about', {
			url: '/about',
			templateUrl: 'app/userInfo/userInfo.html',
			controller: 'UserInfoController'
		})
}])

.controller('UserInfoController', ['$scope', function($scope) {

}])
