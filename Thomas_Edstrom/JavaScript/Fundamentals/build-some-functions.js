// 1
function runningLogger(){
	console.log('I am running!');
}

// 2
function multiplyByTen(param1){
	return param1*10;
}
multiplyByTen(5)

// 3
function stringReturnOne(){
	return "string one";
}
function stringReturnTwo(){
	return "string two";
}

// 4
function caller(param1){
	if (typeof param1 == "function"){
		param1();
	}
}

// 5
function myDoubleConsoleLog(param1, parmam2){
	if ((typeof param1 =='function') && (typeof param2 =='function')){
		console.log(param1());
		console.log(param2());
	}
}

// 6
function caller2(param1){
	console.log('starting');
	setTimeout(function(){ if (typeof(param1)=='function'){
		param1()
	}  }, 2000);
	console.log('ending?');
	return "interesting";
}
caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));