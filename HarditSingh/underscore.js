var _ = {
   map: function(arr,func) {
	   var newArr =[];
	   for (i in arr ){
		   newArr.push(func(arr[i]));
	   }
	   return newArr;
	},
   reduce: function(arr,func,memo) { 
	   memo = typeof memo !== 'undefined' ? memo : 0;
	   for(i in arr){
		   memo = func(arr[i],memo);
	   }
	   return memo;
   },
   find: function(arr,func) {   
	   for (i in arr){
		   if (func(arr[i])){
			   return [arr[i],parseInt(i)]; //returning the value and index at which the value was found
		   }
	   }
   },
   filter: function(arr,func) {
	   var newArr = [];
	   for (i in arr) {
		   if (func(arr[i])){
			   newArr.push(arr[i]);
		   }
	   }
	   return newArr;
    },
   reject: function(arr,func) { 
	   var newArr = [];
	   for (i in arr) {
		   if ( !func(arr[i])){
			   newArr.push(arr[i]);
		   }
	   }
	   return newArr;
   }
 }

 var arr = [1,2,3,4,5,6,7,8];

 var x = _.map( arr , function(num) { return num*5; });
 console.log("map",x);

 var x = _.filter(arr, function(num) {return num%2==0;});
 console.log('filter evens',x);

  var x = _.find(arr, function(num) {return num == 5;});
 console.log('find evens',x);

 
 var x = _.reject(arr, function(num) {return num%2==0;});
 console.log('reject evens',x);


 var x = _.reduce(arr, function(num,memo) {return memo+num;});
 console.log('reduce sum',x);
