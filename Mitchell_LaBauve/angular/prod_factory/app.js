var app = angular.module('app', []);
app.factory('factory1', function(){
	var prod = [
		{name: 'tv', price: 35}
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
		factory1.addProd(data);
		$scope.newp = null;
		return data;
	};
	$scope.delete = factory1.delete;

}])