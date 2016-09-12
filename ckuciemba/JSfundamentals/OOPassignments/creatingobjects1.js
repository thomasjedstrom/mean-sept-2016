
function vehicleConstructor(name, numwheels, numpassengers){
    var vehicle = {}
    vehicle.name= name,
    vehicle.numwheels= numwheels,
    vehicle.numpassengers=numpassengers,
    vehicle.makenoise=  function(){
        console.log("vroom");
    },
    return vehicle;
}


var Bike=vehicleConstructor("bike", 2, 1);
// Object {name: "bike", numwheels: 2, numpassengers: 1}
Bike.makenoise=function(){
    console.log("ring ring");
}
Bike.makenoise();


var Sedan=vehicleConstructor("sedan", 4, 2);
//Object {name: "sedan", numwheels: 4, numpassengers: 2}
Sedan.makenoise= function(){
    console.log("honk honk");

}
var Bus=vehicleConstructor("sedan", 4, 9);
Bus.passengercount= function(newpass){
    Bus.numpassengers += newpass;
}
