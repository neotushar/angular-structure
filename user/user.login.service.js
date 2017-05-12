angular.module('user').factory('LoginService', function($http, $q) {
	return {
		login: function(user) {
			return $http.post('api/login.php', user);
		},
		logout: function() {
			var deferred = $q.defer();
			deferred.resolve();
			return deferred.promise;
		},
		register: function(user) {
			return $http.post('api/register.php', user);
		}
	};
});