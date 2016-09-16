angular.module('app')
.controller('productsController', ['$scope', '$log', 'productFactory', function($scope, $log, productFactory){
	function setProducts(data){
		$scope.products = data;
		$scope.product = {};
	}

	$scope.product = {};
	$scope.products = [];

	$scope.index = function(){
		productFactory.index(setProducts);
	}
	$scope.index();

	$scope.create = function(){
		productFactory.create($scope.product, setProducts);
	}
	$scope.delete = function(id){
		productFactory.delete(id, setProducts);
	}

}])