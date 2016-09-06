function runningLogger(){
  console.log('I am running');
}

function multiplyByTen(value){
  return value*10;
}
multiplyByTen(5);

function stringReturnOne(){
  return 'one';
}

function stringReturnTwo(){
  return 'two';
}

function caller(arg){
  if (typeof(arg) == 'function'){
    arg
  }
}
function myDoubleConsoleLog(arg1,arg2){
  if (typeof(arg1) == 'function'){
    arg1
  }
  if (typeof(arg2) == 'function'){
    arg2
  }
}

function caller2(arg){
  console.log('starting');
  if (typeof(arg) == 'function'){
    setTimeout(arg, 2000);
  }
}
