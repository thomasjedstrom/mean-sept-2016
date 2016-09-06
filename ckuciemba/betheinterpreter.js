//Problem 1:
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable)
// }
// console.log(first_variable);


//declarations get hoisted

var first_variable = "Yipee I was first!";
console.log(first_variable); //first_variable is declared and then logged to the console

function firstFunc() {
  var first_variable = "Not anymore!!!";//declare the variable(var) so that first_variable is a different value in the function
  console.log(first_variable)
}
//assignments and invocation maintain order

console.log(first_variable);//since function was not called, first_variable is still "Yippee I was first!"
//if added firstFunc();--"Not anymore!! would be logged"

// Problem 2
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);


//this will work with no changes, however the second var within the function should be moved to the first variable.
//declarations get hoisted
function eat() {
  var food = "half-chicken"; //food is assigned to half-chicken
  console.log(food);
  food = "gone";       // food changes to "gone" within the function and logged
  console.log(food);
}
//assignments and invocation maintain order
eat();
var food = "Chicken";
console.log(food); //displays "Chicken" since we are no longer in the function"


//
// Problem 3
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);



//declarations get hoisted
function lastFunc() {
  var new_word = "old"; //add var to have new_word within the function
  //console.log(new_word) can console log new_word to print the new word
}

//assignments and invcation maintain order
var new_word = "NEW!";
console.log(new_word);//----------------as is the function would only display "NEW!"
//lastFunc();  the function is not being called.
