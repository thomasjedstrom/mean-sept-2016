function stringReturnOne(){
	var x = "Teenage Mutant";
	return x;
};
function stringReturnTwo(){
	var y = "Ninja Turtles";
	return y;
}
console.log(stringReturnOne());
console.log(stringReturnTwo());


function caller(stalker) {
	if (typeof stalker == "function") {
		return "This is a function.";
	}
	if (typeof stalker != "function") {
		return "Not a function.";
	}
}
console.log(stringReturnOne());
console.log(stringReturnTwo());