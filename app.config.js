angular.module('app').config(function($stateProvider) {
	var states = [
		{
			name: 'home',
			url: '/',
			component: 'home',
			authenticate: false
		},
		{
			name: 'asdf',
			url: '/asdf',
			template: 'This is restricted',
			authenticate: true,
		}
	];

	states.forEach(function(s) {
		$stateProvider.state(s);
	});
});

angular.module('app').run(function($state, $transitions, UserService) {
	$transitions.onStart({ to: function(state) { return state.authenticate }}, function(transition) {
		if(!UserService.isAuthenticated()) {
			return $state.target('login');
		}
	});
});