// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

function runninglogger(){
    console.log("I am running!")
}
runninglogger();

//  Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function multiplyByTen(num){
    num= num * 10;
    return num;
}
multiplyByTen(5);

//  Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

function stringReturnOne(){
    var string='This is string one';
    return string;
}
stringReturnOne();

function stringReturnTwo(){
    var string="This is string two";
    return string;
}
stringReturnTwo();

//  Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
function caller(param){
    if(typeof(param)==='function'){
        param();
    }
}

//  Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(param1, param2){
    if(typeof(param1)==='function'){
        console.log(param1());
    }
    if(typeof(param2)==='function'){
        console.log(param2());
    }
}

//  Hard: Write a function named caller2 that has one parameter. It console.log's the string 'starting', waits 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(param){
    console.log("starting");
    if(typeof(param)==='function'){
        setTimeout(param, 2000);
    }
    console.log("ending?");
    return "Interesting";
}

caller2(myDoubleConsoleLog(param1, param2));
