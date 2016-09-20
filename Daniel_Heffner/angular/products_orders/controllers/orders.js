appModule.controller('order_controller', ['$scope', 'product_factory', function($scope, product_factory){
	$scope.products = [];
	product_factory.getProducts(function(data){
		$scope.products = data;
	});
	// buy product
	$scope.buy = function(i){
		var status = product_factory.buyProduct(i);
		if (!status.success){
			alert('Could not purchase product! Perhaps we don\'t have it in stock?');
		}
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
