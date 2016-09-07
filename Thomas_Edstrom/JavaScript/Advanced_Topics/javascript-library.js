var _ = {
	map: function(arr, callback) {
		var newArr = [];
		for(var i=0; i<arr.length; i++){
			newArr.push(callback(i));
		};
		return newArr;
	},
	reduce: function(arr, callback) {
		var newVal = null;
		for(var i=0; i<arr.length; i++){
			newVal += (callback(i));
		};
		return newVal;
	},
	find: function(arr, callback) {
		for(var i=0; i<arr.length; i++){
			if (callback(arr[i])){
				return arr[i];
			};
		};
		return undefined;
	},
	filter: function(arr, callback) {
		var newArr = [];
		for(var i=0; i<arr.length; i++){
			if (callback(arr[i])){
				newArr.push(arr[i]);
			};
		};
		return newArr;	
	},
	reject: function(arr, callback) {
		var newArr = [];
		for(var i=0; i<arr.length; i++){
			if (!callback(arr[i])){
				newArr.push(arr[i]);
			};
		};
		return newArr;		
	},
}