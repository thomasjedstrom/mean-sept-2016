var app = angular.module('app', []);
app.controller('favFood', function($scope){
	$scope.list = ['fried rice', 'steamed rice'];
	$scope.addFood = function(){
		$scope.list.push($scope.newfd);
		$scope.newfd = "";
	}
})