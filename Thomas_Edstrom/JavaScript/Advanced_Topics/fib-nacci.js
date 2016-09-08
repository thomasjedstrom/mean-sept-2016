function fib(){
	var result = 0;
	var first = 0;
	var second = 0;
	function nacci() {
		if (result==0){
			result = 1;
		}else{
			second = first;
			first = result;
			result = first + second;
		}
		console.log(result)
	}
	return nacci
};





var fibCounter = fib();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"