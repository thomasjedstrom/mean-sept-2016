module.exports = function (){
	return {
		add: function(num1, num2) { 
			return num1 + num2;
		},
		multiply: function(num1, num2) {
			return num1 * num2
		},
		square: function(num) {
			return num * num
		},
		random: function(num1, num2) {
			var arg1 = null;
			var arg2 = null;
			if (num1>num2){
				arg1 = num1;
				arg2 = num2;
			}else{
				arg1 = num2;
				arg2 = num1;
			}
			return Math.floor(Math.random()*(arg1 - arg2 + 1)) + arg2;
		}
	}
}();