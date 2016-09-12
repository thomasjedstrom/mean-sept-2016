
function vehicleConstructor(name, numwheels, numpassengers, speed){
    var that=this;
    var distance_travelled= 0;
    var updateDistanceTravelled= function(){
        distance_travelled += that.speed;
    }

    this.name= name;
    this.numwheels= numwheels;
    this.numpassengers=numpassengers;
    this.speed=speed;
    this.makenoise=  function(){
        console.log("vroom");
    }
    this.move= function(){
        updateDistanceTravelled();
        this.makenoise();
    }
    this.checkMiles= function(){
        console.log(distance_travelled);
    }

}
