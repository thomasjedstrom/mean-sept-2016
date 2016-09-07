// Create a VehicleConstructor that takes in the name, number of wheels, and number of passengers. 
// Then complete the following tasks:

function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;

	vehicle.makeNoise = function(){
		console.log("Hola, La la la. I am " + vehicle.name +". I have " + vehicle.wheels 
		+ " wheels and can carry " + vehicle.passengers + " passengers.")
	}
	return vehicle;
}

var Bike = VehicleConstructor("Sparkles", 2, 1);

var Sedan = VehicleConstructor("Green Volvo", 5, 4);

var Bus =VehicleConstructor("Bang Bus", 6, 14);

Bike.makeNoise();
Sedan.makeNoise();

Bike.makeNoise = function(){
	console.log('Ring Ring!')
}
Sedan.makeNoise = function(){
	console.log('Honk Honk!')
}

Bike.makeNoise();
Sedan.makeNoise();

Bus.pickUp = function(kids){
	Bus.passengers += kids;
}
Bus.makeNoise();
Bus.pickUp(5);
Bus.makeNoise();
