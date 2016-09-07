/* ***************Part III***************** */

var VehicleConstructor = function(name, wheels, riders, speed, distance){
	var self = this;
	self.vin = Math.floor((Math.random()*10000000)+1);
	self.vincreate = function(){
		console.log(self.vin);
	};
	self.name = name;
	self.wheels = wheels;
	self.riders = riders;
	self.speed = speed || 1;
	self.distance = distance || 1;
	if (!(self instanceof VehicleConstructor)) {
   		// the constructor was called without "new".
   		return new VehicleConstructor(name, wheels, riders, speed, distance);
 	}
	console.log('sweet ride!');
}
VehicleConstructor.prototype.vin = function(){
	console.log(this.vincreate);
}
VehicleConstructor.prototype.makeNoise = function(noise){
	noise = noise || 'honk'
	console.log(noise);
	return this;		
}
VehicleConstructor.prototype.updateDistance_Travelled = function(){
 		this.distance += this.speed*5;
 		console.log( 'Distance travelled: '+this.distance);		
 	}
VehicleConstructor.prototype.distance_travelled = function(){
 		console.log('Distance travelled: '+this.distance);		
}

VehicleConstructor.prototype.move = function() {
	this.updateDistance_Travelled();
	this.makeNoise();
	return this;
};
VehicleConstructor.prototype.checkMiles = function(){
	console.log('Distance travelled: '+this.distance);
	return this;
}

var bike = new VehicleConstructor('bike', 2, 1);
bike.makeNoise('ring').move().checkMiles().vincreate();
console.log(bike.vin);




