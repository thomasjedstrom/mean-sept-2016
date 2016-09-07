function VehicleConstructor(name, numWheels, numPassengers){
	var vehicle = {};
	vehicle.name = name;
	vehicle.numWheels = numWheels;
	vehicle.numPassengers = numPassengers;
	vehicle.makeNoise = function(){
		console.log("vrrrroooommmm!");
	}
	return vehicle;
}

var bike = VehicleConstructor('bike', 2, 1);
bike.makeNoise = function(){
	console.log('ring ring!')
}
// bike.makeNoise();

var sedan = VehicleConstructor('sedan', 4, 3);
sedan.makeNoise	= function() {
	console.log('Honk Honk!');
}
// sedan.makeNoise();

var bus = VehicleConstructor('bus', 8, 6);
bus.pickUp = function(passengers){
	this.numPassengers += passengers;
}
// bus.makeNoise();
// bus.pickUp(5);
// console.log(bus.numPassengers);
