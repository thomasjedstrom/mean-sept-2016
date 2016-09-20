angular.module('app')
.controller('ordersController', ['$scope', '$log', 'productFactory', function($scope, $log, productFactory){
	function setProducts(data){
		$scope.products = data;
	}
	$scope.products = [];

	$scope.index = function(){
		productFactory.index(setProducts);
	}
	$scope.index();


	$scope.buy = function(id){
		productFactory.buy(id, setProducts);
	}

}])