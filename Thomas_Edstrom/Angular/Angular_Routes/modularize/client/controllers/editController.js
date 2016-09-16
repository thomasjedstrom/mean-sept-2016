angular.module('app')
.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {

	this.controlValue = "Current Name:";

	this.getUser = function(){
		userFactory.show(rParams.id, function(user) {
			$scope.user = user;
		})
	}

	this.updateUser = function(){
		userFactory.update($scope.users, rParams.id, function(user){
			$scope.user = user;
			this.controlValue = "Updated Name: "
		});
	}
	this.getUser();
}]);