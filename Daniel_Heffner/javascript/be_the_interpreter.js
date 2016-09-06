// PROBLEM 1

// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable)
// }
// console.log(first_variable);

console.log('PROBLEM 1');
// declarations get hoisted
var first_variable;
function firstFunc() {
	first_variable = "Not anymore!!!";
	console.log(first_variable)
}

// assignments and invocations maintain order
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

console.log('--------------------------');
// PROBLEM 2

// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

console.log('PROBLEM 2');
// declarations get hoisted
var food;
function eat() {
	var food;
	food = "half-chicken";
	console.log(food);
	food = "gone";
	console.log(food);
}

// assignments and invocations maintain order
food = "Chicken";
eat();
console.log(food);

console.log('--------------------------');
// PROBLEM 3

// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

console.log('PROBLEM 3');
// declarations get hoisted
var new_word;
function lastFunc() {
  new_word = "old";
}

// assignments and invocations maintain order
new_word = "NEW!";
console.log(new_word);
