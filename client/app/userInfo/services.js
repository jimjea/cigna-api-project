angular.module('cigna.userInfoServices', []) 

.factory('UserInfo', ['$http', function($http) {
	var getToken = function(code) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8000/users/tokenRetrieval'
		})
	}
}])
