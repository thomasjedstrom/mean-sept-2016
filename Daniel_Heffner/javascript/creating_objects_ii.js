function VehicleConstructor(name, numWheels, numPassengers,speed){
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, numWheels, numPassengers);
	}
	var self = this;
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	}
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.move = function(){
		updateDistanceTravelled();
		this.makeNoise();
		return this;
	}
	this.checkMiles = function(){
		console.log(distance_travelled);
		return this;
	}
}
VehicleConstructor.prototype.makeNoise = function(){
	console.log("vrrrroooommmm!");
	return this;
}


var bike = new VehicleConstructor('bike', 2, 1, 10);
bike.makeNoise = function(){
	console.log('ring ring!')
	return this;
}
// bike.makeNoise();

var sedan = new VehicleConstructor('sedan', 4, 3, 50);
sedan.makeNoise	= function() {
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
