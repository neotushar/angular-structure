angular.module('user').config(function($stateProvider) {
	var states = [
		{
			name: 'login',
			url: '/login',
			component: 'login',
			authenticate: false
		},
		{
			name: 'register',
			url: '/register',
			component: 'register',
			authenticate: false
		}
	];

	states.forEach(function(s) {
		$stateProvider.state(s);
	});
});