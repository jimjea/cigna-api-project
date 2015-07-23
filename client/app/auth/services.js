angular.module('cigna.authServices', [])

.factory('Auth', ['$http', function($http) {

	var userLogin = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8000/users/userAuth'
		})
		.success(function(res) {
			return res;
		})
		.error(function(error) {
			console.error(error);
		})
	};


	return {
		userLogin: userLogin
	};

}]);
