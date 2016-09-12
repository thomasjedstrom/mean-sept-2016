
function vehicleConstructor(name, numwheels, numpassengers, speed){

    this.distance_travelled= 0;
    this.name= name;
    this.numwheels= numwheels;
    this.numpassengers=numpassengers;
    this.speed=speed;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    this.vin=genvin();


    function genvin(){
        var vin = "";
        for( var i=0; i < 18; i++ ){
            vin += chars[Math.floor(Math.random() * chars.length)];
        }
        return vin;
    }

    vehicleConstructor.prototype.makenoise=  function(noise){
        var noise= noise;
        console.log(noise);
        return this;
    }
    vehicleConstructor.prototype.move= function(){
        this.updateDistanceTravelled();
        this.makenoise();
        return this;
    }
    vehicleConstructor.prototype.checkMiles= function(){
        console.log(this.distance_travelled);
        return this;
    }
    vehicleConstructor.prototype.updateDistanceTravelled= function(){
        this.distance_travelled += this.speed;
        console.log(this.distance_travelled);
    }

}

var Bike= new vehicleConstructor("bike", 2, 1, 10);
// Object {name: "bike", numwheels: 2, numpassengers: 1}
Bike.makenoise=function(){
    console.log("ring ring");
    return this;
}
// Bike.makenoise();

var Sedan= new vehicleConstructor("sedan", 4, 2, 20);
//Object {name: "sedan", numwheels: 4, numpassengers: 2}
Sedan.makenoise= function(){
    console.log("honk honk");
    return this;
}
Sedan;
Sedan.makenoise();
var Bus= new vehicleConstructor("sedan", 4, 9, 14);
Bus.passengercount= function(newpass){
    Bus.numpassengers += newpass;
    return this;
}
