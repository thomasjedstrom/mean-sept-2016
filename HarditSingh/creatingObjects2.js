function VehicleConstructor( name, wheels, passengers,speed){

	var self = this;
	var distance_traveled = 0;

	var updateDistanceTravelled = function(){
		distance_traveled+=self.speed;
	}

	this.name = name;
	this.whells = wheels;
	this.passengers = passengers;
	this.speed = speed;

	this.makeNoise = function(noise){
		console.log(noise);
	}

	this.move = function(){
		this.makeNoise();
		updateDistanceTravelled();
	}

	this.checkMiles = function() {
		console.log(distance_traveled);
	}
}

var bike = new VehicleConstructor('Bike',2,1,5);
bike.makeNoise('ring ring');
bike.move();
bike.checkMiles();

var sedan = new VehicleConstructor("Sedan", 4,4,50);
sedan.makeNoise('honk honk');

var bus = new VehicleConstructor("Bus",4,0,40);
bus.addPassenger = function(num) {
	num = typeof num !== 'undefined' ? num : 1;
	bus.passengers +=num;
}

bus.addPassenger();
console.log(bus.passengers);