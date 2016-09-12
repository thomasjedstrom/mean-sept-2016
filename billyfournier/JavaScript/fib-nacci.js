function fib() {
  var a = 0;
  var b = 0;
  var tmp = 0;
  function nacci() {
    if (b == 0) { b = 1; console.log(b); }
    else {
      tmp = a+b;
      console.log(tmp);
      a = b;
      b = tmp;
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
