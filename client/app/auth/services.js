angular.module('cigna.authServices', [])

.factory('Auth', ['$http', function($http) {

	var userLogin = function(userData) {
		return $http({
			method: 'GET',
			url: 'placeholder',
			data: userData
		})
		.success(function(res) {
			console.log(res);
		});
	};


	return {
		userLogin: userLogin
	};

}]);
