appModule.factory('product_factory', function(){
	var products = [
		{id: 1, name: 'Sample Product', price: 39.95, qty: 50},
	];
	var factory = {}
	factory.getProducts = function(callback){
		callback(products);
		return false;
	}
	var new_id = 2;
	factory.addProduct = function(name, price){
		if (name != '' && (price != '' && price > 0)){
			products.push({id: new_id, name: name, price: price, qty: 50});
			new_id++;
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
		var i = 0;
		while (products[i].id != idx && i < products.length){
			i++;
		}
		if (i < products.length) products.splice(i, 1);
	}
	factory.buyProduct = function(idx){
		var i = 0;
		while (products[i].id != idx && i < products.length){
			i++;
		}
		if (products[i].qty == 0){
			var status = {success: false};
			return status;
		} else {
			products[i].qty--;
			var status = {success: true};
			return status;
		}
	}
	return factory;
})
