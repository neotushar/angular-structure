angular.module('user').component('login', {
	templateUrl: 'user/user.login.template.html',
	controller: function($rootScope, $state, LoginService, UserService) {
		var vm = this;

		vm.user = {};

		vm.login = function(valid) {
			if(valid) {
				LoginService.login(vm.user).then(function(response) {
					if(response.data.status) {
						var u = response.data.user;
						UserService.setCurrentUser(u);
						$rootScope.$broadcast('authorized');
						$state.go('home');
					}
					// console.log(response);
				});
			}
		}
	}
});