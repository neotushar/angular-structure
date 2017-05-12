angular.module('app').controller('MainCtrl', function($rootScope, $state, UserService, LoginService) {
	var main = this;

	main.logout = function() {
		LoginService.logout().then(function(response) {
			main.currentUser = UserService.setCurrentUser(null);
			$state.go('home');
		}, function(error) {
			console.log(error);
		});
	};

	$rootScope.$on('authorized', function() {
		main.currentUser = UserService.getCurrentUser();
	});

	$rootScope.$on('unauthorized', function() {
		main.currentUser = UserService.setCurrentUser(null);
		$state.go('login');
	});

	main.currentUser = UserService.getCurrentUser();
});