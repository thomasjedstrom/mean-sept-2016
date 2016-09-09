function VehicleConstructor( name, wheels, passengers){
	var vehicle = {}
	
	vehicle.name = name;
	vehicle.whells = wheels;
	vehicle.passengers = passengers;

	vehicle.makeNoise = function(noise){
		console.log(noise);
	}

	return vehicle;
}

var bike = VehicleConstructor('Bike',2,1);
bike.makeNoise('ring ring');

var sedan = VehicleConstructor("Sedan", 4,4);
sedan.makeNoise('honk honk');

var bus = VehicleConstructor("Bus",4,0);
bus.addPassenger = function(num) {
	num = typeof num !== 'undefined' ? num : 1;
	bus.passengers +=num;
}

bus.addPassenger();
console.log(bus.passengers);