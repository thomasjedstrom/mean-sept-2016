module.exports = function (){
  return {
	 	add: function(num1, num2) { 
			if (!(typeof(num1) == 'number' && typeof(num2) == 'number')){
				return null;
			}
			return num1 + num2;
		},
	 	multiply: function(num1, num2) {
			if (!(typeof(num1) == 'number' && typeof(num2) == 'number')){
				return null;
			}
			return num1 * num2;
		},
		square: function(num) {
			if (typeof(num) != 'number'){
				return null;
			} 
			return num * num;
		},
		random: function(min, max) {
			if (!(typeof(min) == 'number' && typeof(max) == 'number') || !(min < max)){
				return null;
			}
			return Math.floor(Math.random()*max + min);
		}
	}
}();
