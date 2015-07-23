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

	var getUserData = function(data) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8000/users/tokenRetrieval',
			data: data
		})
		.success(function(res) {
			return res;
		})
		.error(function(error) {
			console.error(error);
		})
	}

	return {
		userLogin: userLogin,
		getUserData: getUserData
	};

}]);
