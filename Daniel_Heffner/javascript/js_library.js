var _ = {
	map: function(list, func){
		for (var i = 0; i < list.length; i++){
			list[i] = func(list[i]);
		}
		return list;
	},
	reduce: function(list, func, memo){
		for (var i = 0; i < list.length; i++){
			memo = func(list[i], memo);
		}
		return memo;
	},
	find: function(list, func){
		for (var i = 0; i < list.length; i++){
			if (func(list[i])){
				return list[i];
			}
		}
		return undefined;
	},
	filter: function(list, func){
		var passed = [];
		for (var i = 0; i < list.length; i++){
			if (func(list[i])){
				passed.push(list[i]);
			}
		}
		return passed;
	},
	reject: function(list, func){
		var rejected = [];
		for (var i = 0; i < list.length; i++){
			if (!(func(list[i]))){
				rejected.push(list[i]);
			}
		}
		return rejected;
	},
}


// TESTS

// console.log(_.map([1,3,5,7,9,11], function(x){ return x + (x%4) }));
// console.log(_.reduce([10,15,9,12,20,20], function(x, memo){ return x/memo }, 2));
// console.log(_.find([3,5,7,2,4,6], function(x){ return x%2 == 0 }));
// console.log(_.filter([3,5,7,2,4,6], function(x){ return x%2 == 0 }));
// console.log(_.reject([3,5,7,2,4,6], function(x){ return x%2 == 0 }));
