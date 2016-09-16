angular.module('app')
.factory('productFactory', function(){
	var factory = {};
	var products = [
		{name: 'Keyboard', price: 149.99, qty: 50},
		{name: 'Mouse', price: 59.99, qty: 50},
		{name: 'Basketball', price: 59.99, qty: 50}
	];

	factory.index = function(callback){
		callback(products)
	}
	factory.create = function(product, callback){
		if(product.price && Number(parseFloat(product.price))==product.price){
			product.qty = 50;
			products.push(product);
			callback(products);
		}
	}
	factory.delete = function(id, callback){
		products.splice(id, 1);
		callback(products);
	}
	factory.buy = function(id, callback){
		products[id].qty -= 1;
		callback(products);
	}

	return factory;
})

