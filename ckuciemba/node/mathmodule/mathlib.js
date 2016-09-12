module.exports = {
    add: function(num1, num2){
        console.log("The sum of " + num1+ " and " +num2 +" is:", num1+num2);
    },
    multiply: function(num1, num2){
        console.log(num1 + " and " + num2+ " multiplied is:", num1*num2);
    },
    square: function(num){
        console.log(num +  " squared  is: ",  num*num);
    },
    randnum: function(num1, num2){
        console.log("A number between " + num1+ " and " + num2 + " is ", Math.floor( Math.random() * num2) + num1);
    },
}


// add two numbers (e.g. math.add(2,3) should return 5)//done
// multiply two numbers (e.g. math.multiply(3,5) should return 15)//done
// square a number (e.g. math.square(5) should return 25)//done
// returns a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)
