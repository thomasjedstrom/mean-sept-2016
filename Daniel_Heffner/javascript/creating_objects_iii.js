function VehicleConstructor(name, numWheels, numPassengers,speed){
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, numWheels, numPassengers);
	}
	this.distance_travelled = 0;
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.vin = Math.floor(Math.random()*100000000);
}
VehicleConstructor.prototype.makeNoise = function(){
	console.log("vrrrroooommmm!");
	return this;
}
VehicleConstructor.prototype.updateDistanceTravelled = function(){
	this.distance_travelled += this.speed;
}
VehicleConstructor.prototype.move = function(){
	this.updateDistanceTravelled();
	this.makeNoise();
	return this;
}
VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance_travelled);
	return this;
}


var bike = new VehicleConstructor('bike', 2, 1, 10);
bike.makeNoise = function(){
	console.log('ring ring!')
	return this;
}
// bike.makeNoise();

var sedan = new VehicleConstructor('sedan', 4, 3, 50);
sedan.makeNoise = function() {
	console.log('Honk Honk!');
	return this;
}
// sedan.makeNoise();

var bus = new VehicleConstructor('bus', 8, 6, 35);
bus.pickUp = function(passengers){
	this.numPassengers += passengers;
	return this;
}
// bus.makeNoise();
// bus.pickUp(5);
// console.log(bus.numPassengers);

// bus.move().pickUp(5).move().pickUp(7);
// console.log(bus.numPassengers + ' passengers');
// bus.checkMiles();
// console.log(bus.vin);