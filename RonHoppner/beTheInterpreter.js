// Problem 1

console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);

// Output = undefined, 'Yipee I was first!'

// Problem 1 Solution

var first_variable;
function firstFunc(){
	first_variable = 'Not anymore!!!';
	console.log(first_variable);
}
first_variable = 'Yipee I was first!';
firstFunc();
console.log(first_variable);

// Output = 'Yipee I was first', 'Not anymore!!!', 'Not anymore!!!'

// Problem 2

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}
eat();
console.log(food);

// Output = 'half-chicken', 'gone', 'Chicken'

// Problem 2 Solution

var food;
function eat(){
	var food;
	food = 'gone'
	food = 'half-chicken'
	console.log(food);
	console.log(food);
}
food = 'Chicken';
eat();
console.log(food);

// Output = 'half-chicken', 'half-chicken', 'Chicken'

// Test:
// var food = 'Chicken';
// function eat(){
// 	var food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// 	console.log(food);
// }
// console.log(food);
// eat();
// Is this what we were trying to get to??? Output = 'Chicken, 'half-chicken', 'gone'

// Problem 3

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

// Output = 'NEW!'

// Problem 3 Solution

var new_word;
function lastFunc(){
	new_word = 'old';
}
new_word = 'NEW!';
console.log(new_word);

// Output = 'NEW!'
