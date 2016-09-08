var VehicleConstructor = function(name, wheels, passengers){
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	if (!(this instanceof VehicleConstructor)) {
   		return new VehicleConstructor(name, wheels, passengers);
 	}
	console.log('Come on, we have got room!')
}

VehicleConstructor.makeNoise = function(noise){
	noise = noise('honk')
	console.log(noise);
}

var bike = new VehicleConstructor('bike', 2, 1);
bike.makeNoise('ring ring!');


var sedan = new VehicleConstructor('sedan', 4, 6);
sedan.makeNoise('Honk Honk!');


var bus = new VehicleConstructor('bus', 6, 7);
bus.addCount = function(pickup) {
	this.passengers += pickup || 0;
	console.log('Number of passengers: '+this.passengers);
	return this;
};
bus.addCount(4);

var rider = VehicleConstructor('name', 2, 2);
rider.makeNoise();
