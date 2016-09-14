function fib() {
  var fibPrev1 = 0;
  var fibPrev = 0;
  var fibNow = 0;
  var temp = 0;
  function nacci() {
    if (fibNow ==0 && fibPrev ==0){
		fibNow+=1;
	}
	else {
		if(fibNow==1 && fibPrev==0){
			fibPrev = 1;
		}
		else {
		temp = fibNow;
		fibNow = fibNow+fibPrev;
		fibPrev1=fibPrev;
		fibPrev=temp;
		}	
	}
	console.log(fibNow);
  	}
  
  	return nacci;
}
var fibCounter = fib();
fibCounter() // should console.log "1" 
fibCounter() // should console.log "1" 
fibCounter() // should console.log "2" 
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"