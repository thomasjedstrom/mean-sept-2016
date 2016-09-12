// //Can we make this into a method of an object?
// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }

var _ = {
   map: function(arr, func) {
   		for (var i = 0; i < arr.length; i++){
   			arr[i] = func(arr[i]);
   		}
   		return arr;
   	},
   reduce: function(arr, func, memo){
   		for (var i = 0; i < arr.length; i++){
   			memo = func(arr[i], memo);
   		}
   		return memo;
   	},
   find: function(arr, func) {
       for (var i = 0; i < arr.length; i++){
           if (func(arr[i])){
               return arr[i];
           }
       }
       return undefined;
   },
   filter: function(arr, func) {
       var newarr = [];
       for (var i = 0; i < arr.length; i++){
           if (func(arr[i])){
               newarr.push(arr[i]);
           }
       }
       return newarr;
   },
   reject: function(arr, func) { // code here}
       var rejected = [];
       for (var i = 0; i < arr.length; i++){
           if (!(func(arr[i]))){
               rejected.push(arr[i]);
           }
       }
       return rejected;
   },

 }
// you just created a library with 5 methods!


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

//
