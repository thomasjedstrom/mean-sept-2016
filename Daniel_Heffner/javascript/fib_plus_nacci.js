function fib(){
	var num1 = 0;
	var num2 = 1;
	function nacci(){
		console.log(num2);
		var temp = num2;
		num2 += num1;
		num1 = temp;
	}
	return nacci;
}

var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
