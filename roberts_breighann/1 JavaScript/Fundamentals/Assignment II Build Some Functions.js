function runningLogger(){
	console.log('I am running!');
}
runningLogger();

function multiplyByTen(x){
	console.log(x * 10);
}
multiplyByTen(5);

function stringReturnOne(){
	console.log('This is output from stringReturnOne')
}
stringReturnOne();

function stringReturnTwo(){
	console.log('This is output from stringReturnTwo')
}
stringReturnTwo();

function caller(x){
	if (typeof(x) == 'function'){
		x();
	}
}
caller(runningLogger);

function myDoubleConsoleLog(x,y){
	if (typeof(x) == 'function' && typeof(y) == 'function'){
		console.log('test');
		console.log(x(5), y(10));
	}
	else {
		console.log('Both arguments need to be functions.');
	}
}
x = multiplyByTen;
y = multiplyByTen;

myDoubleConsoleLog(10, 20);
// myDoubleConsoleLog(x, 20);
// myDoubleConsoleLog(x, y);

function testfunction(){
	console.log('testtesttesttesttesttesttesttesttest')
}

function caller2(x){
	console.log('starting');
	if (typeof(x) == 'function'){
		setTimeout(x, 2000);
		console.log('ending?');
		return 'interesting';
	}
	else{
		console.log('Whatever');
	}
}
caller2(testfunction);