angular.module('todo').config(function($stateProvider) {
	var states = [
		{
			name: 'todo',
			url: '/todo',
			component: 'todo',
			authenticate: true
		}
	];

	states.forEach(function(s) {
		$stateProvider.state(s);
	});
});