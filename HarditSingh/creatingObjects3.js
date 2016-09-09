function VehicleConstructor( name, wheels, passengers,speed){
	this.name = name;
	this.whells = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.distance_traveled = 0;
	this.vin = Math.floor(Math.random() * Math.pow(10,17));
}

	VehicleConstructor.prototype.makeNoise = function(noise){
			console.log(noise);
		}
	VehicleConstructor.prototype.updateDistanceTravelled = function(){
		this.distance_traveled+=this.speed;
	}
	VehicleConstructor.prototype.move = function(){
		this.makeNoise();
		this.updateDistanceTravelled();
	}
	VehicleConstructor.prototype.checkMiles = function() {
		console.log(this.distance_traveled);
	}


var bike = new VehicleConstructor('Bike',2,1,5);
bike.makeNoise('ring ring');
bike.move();
bike.checkMiles();
console.log(bike.vin)

var sedan = new VehicleConstructor("Sedan", 4,4,50);
sedan.makeNoise('honk honk');
console.log(sedan.vin)

var bus = new VehicleConstructor("Bus",4,0,40);
bus.addPassenger = function(num) {
	num = typeof num !== 'undefined' ? num : 1;
	bus.passengers +=num;
}

bus.addPassenger();
console.log(bus.passengers);