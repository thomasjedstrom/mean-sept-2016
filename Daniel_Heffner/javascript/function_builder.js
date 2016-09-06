 function runningLogger(){
 	console.log('I am running!')
 }

 function multiplyByTen(num){
 	var result = num * 10;
 	return result;
 }

multiplyByTen(5);

function stringReturnOne(){
	return 'I am the first hard-coded string!';
}

function stringReturnTwo(){
	return 'I am the second hard-coded string!';
}

function caller(func){
	if (typeof(func) == 'function'){
		func();
	}
}

function myDoubleConsoleLog(func1, func2){
	if (typeof(func1) == 'function' && typeof(func2) == 'function'){
		console.log(func1());
		console.log(func2());
	}
}

function caller2(func){
	console.log('starting');
	if (typeof(func) == 'function'){
		setTimeout(func, 2000);
	}
	console.log('ending?');
	return 'interesting';
}

caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));