function myDoubleConsoleLog(paramOne, paramTwo) {
    if (typeof paramTwo == "function" && typeof paramTwo == "function") {
        console.log(paramOne());
        console.log(paramTwo());
    return;
    
    };
    console.log("Not functions!")
    return;
};

function testCase1(){
    console.log('Test case 1');
};

function testCase2(){
    console.log('Test case 2');
};

var testNum1 = "Patience";
var testNum2 = "Grasshopper!";

myDoubleConsoleLog(testCase1(), testCase2());
myDoubleConsoleLog(testNum1, testNum2);