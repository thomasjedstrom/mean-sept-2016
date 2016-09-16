angular.module('app')
.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {

	$scope.users = [];

	var usersIndex = function() {
		userFactory.index(function(users) {
			$scope.users = users;
		});
	};
	usersIndex();
		
	$scope.show = function(user_id) {
		$location.url('/edit/' + user_id);
	}

	$scope.delete = function(user_id){
		userFactory.delete(user_id, usersIndex);
	}

}]);