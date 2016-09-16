var appModule = angular.module('food_app', []);

appModule.controller('food-controller', function($scope){
	$scope.food = '';
	$scope.foodList = [];
	$scope.addFood = function(){
		if ($scope.food) {
			$scope.foodList.push(this.food);
			$scope.food = '';
		}
	}
	$scope.filterWord = '';

})
