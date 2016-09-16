function myDoubleConsoleLog(param1, param2) {
    if (typeof param1 == "function" && typeof param2 == "function") {
        console.log(param1());
        console.log(param2());
    return;
    };
    console.log("Both arguments are not functions.")
    return;
};

function caller2(param1){

    console.log("starting");
    setTimeout(caller3(), 2000)

    function caller3(){                         // wait 2 seconds (setTimeout?)
        if (typeof(param1) == "function"){
            param1();
        };

        return;
        };

    console.log("ending?");
    return "interesting";
};

caller2(myDoubleConsoleLog);
var test = caller2(myDoubleConsoleLog);
console.log(test);