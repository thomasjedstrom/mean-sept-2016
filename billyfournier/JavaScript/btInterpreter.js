var first_variable;
console.log(first_variable);
first_variable = "Yipee I was first!";

function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);

////////////////////////////////////////////////////////////////////////////////
var food;
food = "Chicken";
function eat() {
  var food;
  food = "half-chicken"; 
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

////////////////////////////////////////////////////////////////////////////////
var new_word;
new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
