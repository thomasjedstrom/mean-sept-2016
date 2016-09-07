function VehicleConstructor(name, wheels, pass){
  this.dist_travelled = 0;
  this.speed = 0;
  this.name = name;
  this.num_wheels = wheels;
  this.num_pass = pass;
}
VehicleConstructor.prototype.setSpeed = function(spd){ this.speed = spd; }
VehicleConstructor.prototype.updateDistance = function(){ this.dist_travelled += this.speed; }
VehicleConstructor.prototype.makeNoise = function(){ console.log('...'); }
VehicleConstructor.prototype.move = function(){ this.updateDistance(); this.makeNoise(); }
VehicleConstructor.prototype.checkMiles = function(){ console.log(this.dist_travelled); }



bike = new VehicleConstructor('Bike',2,1);
bike.makeNoise = function(){ console.log('ring ring!');}
bike.makeNoise();

sedan = new VehicleConstructor('Sedan',4,1);
sedan.makeNoise = function(){ console.log('honk honk!');}
sedan.makeNoise();

bus = new VehicleConstructor('Buss', 4, 1, 20);
bus.pickUp = function(new_passangers){
  this.num_pass += new_passangers;
}

bus.setSpeed(10);
console.log(bus.speed + ' : speed.');
bus.move();
bus.checkMiles();
