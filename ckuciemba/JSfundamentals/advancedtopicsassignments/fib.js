function fib() {
    var num=0;
    var num2=1;// Some variables here
    function nacci(){
        console.log(num2);
        var temp=num2;
        num2 += num;
        num =temp;
    }// do something to those variables here

  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
