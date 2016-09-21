angular.module('app')
.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
	$scope.addUser = function(user){
		userFactory.create(user);
		$location.url('/index');
	}
}]);