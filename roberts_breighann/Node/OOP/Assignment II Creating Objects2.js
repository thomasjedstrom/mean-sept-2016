var VehicleConstructor = function(name, wheels, passengers, speed, distance){
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed || 1;
	this.distance = distance || 0;
	if (!(this instanceof VehicleConstructor)) {
   		return new VehicleConstructor(name, wheels, passengers, speed, distance);
 	}
	console.log('Come on, we have got room!')
}

VehicleConstructor.makeNoise = function(noise){
	noise = noise('honk')
	console.log(noise);
}

VehicleConstructor.updateDistance_Travelled = function(){
 		this.distance += this.speed*5;
 		console.log(this.distance);		
 	}

VehicleConstructor.makeNoise = function(noise){
	noise = noise || 'honk'
	console.log(noise);
	return this;		
}

VehicleConstructor.move = function() {
	this.updateDistance_Travelled();
	console.log('this far');
	this.makeNoise();
	return this;
};

VehicleConstructor.checkMiles = function(){
	console.log(this.distance)
}

var bike = new VehicleConstructor('bike', 2, 1);
bike.makeNoise('ring ring!');
bike.move();
bike.checkMiles();

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
