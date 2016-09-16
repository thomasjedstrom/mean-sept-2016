var app = angular.module('app', []);
app.controller('users', function($scope){
	$scope.list = [
		{firstname: 'mitty', lastname:'lab', lang:'JS'}

	];
	$scope.addUser = function(){
	
		$scope.list.push($scope.newUser);
		$scope.newUser = {};
	},
	$scope.delete = function(arg){
		$scope.list.splice(arg,1)
	}
})