appModule.controller('product_controller', ['$scope', 'product_factory', function($scope, product_factory){
	$scope.products = [];
	product_factory.getProducts(function(data){
		$scope.products = data;
	});
	
	$scope.new = {
		name: '',
		price: ''
	}
	$scope.error = {
		name: '',
		price: ''
	}
	
	// add product
	$scope.addProduct = function (){
		var result = product_factory.addProduct($scope.new.name, $scope.new.price);
		if (!(result.success)){
			if (result.name){
				$scope.error.name = result.name;
			} else {$scope.error.name = '';}
			if (result.price){
				$scope.error.price = result.price;
			} else {$scope.error.price = '';}
		} else {
			$scope.new = null;
			$scope.error = null;
		}
	}
	// destroy product
	$scope.destroy = function(i){  // the sole function of this function is to call another function...
		product_factory.destroyProduct(i); 
	}
	// sorting stuff
	$scope.col = 'price';
	$scope.reverse = true;
	$scope.sortBy = function(col){
		if ($scope.col === col){
			if ($scope.reverse) {
				$scope.reverse = false;
			} else {
				$scope.reverse = true;
			}
		} else {
			$scope.col = col;
			$scope.reverse = false;
		}
	}
}])
