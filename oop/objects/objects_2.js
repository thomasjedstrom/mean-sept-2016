/* ***************OBJECTS II**************** */

var VehicleConstructor = function(name, wheels, riders, speed, distance){
	var self = this;
	self.name = name;
	self.wheels = wheels;
	self.riders = riders;
	self.speed = speed || 1;
	this.distance = distance || 0;
	if (!(self instanceof VehicleConstructor)) {
   		// the constructor was called without "new".
   		return new VehicleConstructor(name, wheels, riders);
 	}
	console.log('sweet ride!');
}

VehicleConstructor.prototype.updateDistance_Travelled = function(){
 		this.distance += this.speed*5;
 		console.log(this.distance);		
 	}

VehicleConstructor.prototype.makeNoise = function(noise){
	noise = noise || 'honk'
	console.log(noise);
	return this;		
}

VehicleConstructor.prototype.move = function() {
	this.updateDistance_Travelled();
	console.log('this far');
	this.makeNoise();
	return this;
};

VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance)
}


var bike = new VehicleConstructor('bike', 2, 1);
bike.makeNoise('ring');
bike.move();
bike.checkMiles();

var sedan = new VehicleConstructor('sedan', 4, 6);
sedan.makeNoise('honk');

var bus = new VehicleConstructor('bus', 6, 7);
bus.addCount = function(pickup) {
	this.riders += pickup || 0;
	console.log('Number of riders: '+this.riders);
	return this;
};
bus.addCount(4);

var me = VehicleConstructor('mitty', 2, 2);
me.makeNoise();





