angular.module('user').component('register', {
	templateUrl: 'user/user.register.template.html',
	controller: function($http, $rootScope, $state, LoginService, UserService) {
		var vm = this;

		vm.user = {};

		vm.register = function(valid) {
			// console.log(valid);
			if(valid) {
				LoginService.register(vm.user).then(function(response) {
					// console.log(response);
					if(response.data.status) {
						var u = response.data.user;
						UserService.setCurrentUser(u);
						$rootScope.$broadcast('authorized');
						$state.go('home');
					}
				});
			}
		};
	}
});