
function runningLogger() {
	console.log('I am running!');
} 

function multiplyByTen(num) {
	return num*10;
}

multiplyByTen(5);

function stringReturnOne(){
	return "Sting One"
}
function stringReturnTwo(){
	return "Sting Two"
}

function caller(func){
	if (typeof func == 'function'){
		func();
	}
}

function myDoubleConsoleLog(funcOne,funcTwo){
	if (typeof funcOne == 'function'){
		console.log(funcone());
	}
	if (typeof funcTwo == 'function'){
		console.log(funcTwo());
	}
}
function caller2(func){
	console.log("Starting");
	if (typeof func == 'function'){
		setTimeout(func(),2000);
	}
	console.log("Ending");
}
