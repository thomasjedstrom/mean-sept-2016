var appModule = angular.module('product_app', []);

appModule.factory('product_factory', function(){
	var products = [
		{name: 'Sample Product', price: 39.95},
	];
	var factory = {}
	factory.getProducts = function(callback){
		callback(products);
		return false;
	}
	factory.addProduct = function(name, price){
		if (name != '' && (price != '' && price > 0)){
			products.push({name: name, price: price});
			var errors = {success: true};
			return errors;
		} else {
			var errors = {success: false};
			if (name == '') errors.name = 'Products must have names!';
			if (price == '' || !(price > 0)) errors.price = 'Products must cost something!';
			return errors;
		}
	}
	factory.destroyProduct = function(idx){
		console.log('sanity check');
		products.splice(idx, 1);
	}
	return factory;
})

appModule.controller('product_controller', ['$scope', 'product_factory', function($scope, product_factory){
	$scope.products = [];
	product_factory.getProducts(function(data){
		$scope.products = data;
	});
	$scope.newName = '';
	$scope.newPrice = '';
	$scope.nameError = '';
	$scope.priceError = '';
	// add product
	$scope.addProduct = function (){
		var result = product_factory.addProduct($scope.newName, $scope.newPrice);
		if (!(result.success)){
			if (result.name){
				$scope.nameError = result.name;
			} else {$scope.nameError = '';}
			if (result.price){
				$scope.priceError = result.price;
			} else {$scope.priceError = '';}
		} else {
			$scope.newName = '';
			$scope.newPrice = '';
			$scope.nameError = '';
			$scope.priceError = '';
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
