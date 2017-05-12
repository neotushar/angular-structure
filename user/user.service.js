angular.module('user').factory('UserService', function(store) {
	var currentUser = null;

	return {
		setCurrentUser: function(user) {
			currentUser = user;
			store.set('user', user);
			return currentUser;
		},
		getCurrentUser: function() {
			if(!currentUser) {
				currentUser = store.get('user');
			}
			return currentUser;
		},
		isAuthenticated: function() {
			if(!currentUser) {
				currentUser = store.get('user');
			}
			return currentUser ? true : false;
		}
	};
});