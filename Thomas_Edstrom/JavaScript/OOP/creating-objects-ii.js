function VehicleConstructor(name, wheelcount, passengercount, speed){
	var self = this;

	this.name = name;
	this.wheelcount = wheelcount;
	this.passengercount = passengercount;
	this.speed = speed;

	var distance_travelled = 0;

	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	};


	this.move = function(){
		updateDistanceTravelled();
		this.makeNoise();
	};
	this.checkMiles = function(){
		console.log(distance_travelled)
	};


	this.makeNoise = function(){
		console.log("NOISE!!!!");
	};
}



var myBike = new VehicleConstructor("bike", 2, 1, 5);
myBike.makeNoise = function(){
	console.log("ring ring!");
};
myBike.makeNoise();



var mySedan = new VehicleConstructor("car", 4, 4, 60)
mySedan.makeNoise = function(){
	console.log("Honk Honk!");
};
mySedan.makeNoise();



var myBus = new VehicleConstructor("bus", 4, 0, 50);
myBus.addPassengers = function(number){
	myBus.passengercount += number;
}
myBus.addPassengers(20)

console.log(myBus.passengercount)
myBus.move();
myBus.checkMiles()




















