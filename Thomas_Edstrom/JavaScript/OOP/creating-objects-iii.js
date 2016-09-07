function VehicleConstructor(name, wheelcount, passengercount, speed){
	var self = this;

	this.name = name;
	this.wheelcount = wheelcount;
	this.passengercount = passengercount;
	this.speed = speed;
}

// MODIFY PROTOTYPE:
// Not really sure why I'm doing it this way, seems a lot more messy, but here it is:
VehicleConstructor.prototype.distance_travelled = 0;
VehicleConstructor.prototype.updateDistanceTravelled = function(){
	this.distance_travelled += this.speed;
};
VehicleConstructor.prototype.move = function(){
	this.updateDistanceTravelled();
	this.makeNoise();
};
VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance_travelled)
};
VehicleConstructor.prototype.makeNoise = function(){
	console.log("NOISE!!!!");
};

// NEW ATTRIBUTES/METHODS:
VehicleConstructor.prototype.vin = Math.floor(Math.random()*(9999999999999999));
VehicleConstructor.prototype.getVin = function(){
	console.log(this.vin);
};


// INSTANCES:
// 1
var myBike = new VehicleConstructor("bike", 2, 1, 5);
myBike.makeNoise = function(){
	console.log("ring ring!");
};
myBike.makeNoise();


// 2
var mySedan = new VehicleConstructor("car", 4, 4, 60);
mySedan.makeNoise = function(){
	console.log("Honk Honk!");
};
mySedan.makeNoise();


// 3
var myBus = new VehicleConstructor("bus", 4, 0, 50);
myBus.addPassengers = function(number){
	myBus.passengercount += number;
};
myBus.addPassengers(20);

console.log(myBus.passengercount)
myBus.move();
myBus.checkMiles();
myBus.getVin();