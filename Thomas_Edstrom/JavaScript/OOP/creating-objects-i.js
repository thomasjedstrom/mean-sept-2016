function VehicleConstructor(name, wheelcount, passengercount){
	var vehicle = {};

	vehicle.name = name;
	vehicle.wheelcount = wheelcount;
	vehicle.passengercount = passengercount;

	vehicle.makeNoise = function(){
		console.log("NOISE!!!!");
	};

	return vehicle;
}

var myBike = VehicleConstructor("bike", 2, 1);
myBike.makeNoise = function(){
	console.log("ring ring!");
};
myBike.makeNoise();


var mySedan = VehicleConstructor("car", 4, 4)
mySedan.makeNoise = function(){
	console.log("Honk Honk!");
};
mySedan.makeNoise();

var myBus = VehicleConstructor("bus", 4, 0);
myBus.addPassengers = function(number){
	myBus.passengercount += number;
}
myBus.addPassengers(20)
console.log(myBus.passengercount)