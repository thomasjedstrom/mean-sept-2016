var app = angular.module('app', []);
app.factory('factory1', function(){
	var prod = [
		{name: 'tv', price: 35, q: 50}
	];
	var factory = {};
	factory.getProd = function(callback){
		callback(prod);
	},
	factory.addProd = function(data){
		prod.push(data);
		return data;
	};
	factory.delete = function(data){
		prod.splice(data, 1);
		data = null
	}

	return factory;
});

app.controller('products', ['$scope', 'factory1', function($scope, factory1){
	$scope.products = [];

	factory1.getProd(function(data){
		$scope.products = data;
	})

	$scope.addProd = function(data){
		$scope.newp.q = 50;
		factory1.addProd(data);
		$scope.newp = null;
		return data;
	};
	$scope.delete = factory1.delete;

}])
app.controller('orders', ['$scope', 'factory1', function($scope, factory1){
	$scope.products = [];

	factory1.getProd(function(data){
		$scope.products = data;
	})
	$scope.order = function(data){
		if($scope.products[data].q>1){
			$scope.products[data].q -=1;
		}else{
			$scope.products.splice($scope.products[data], 1);
			return;
		}

	};

	$scope.delete = factory1.delete;

}])