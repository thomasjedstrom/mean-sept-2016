function VehicleConstructor(name, wheels, pass, speed){
  var dist_travelled = 0;
  var updateDistance = function(){
    dist_travelled += speed;
  }

  this.speed = speed;
  this.name = name;
  this.num_wheels = wheels;
  this.num_pass = pass;

  this.makeNoise = function(){ console.log('...');}
  this.move = function(){
    updateDistance();
    this.makeNoise();
  }
  this.checkMiles = function(){
    console.log(dist_travelled);
  }
}

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
bus.pickUp(5);
console.log(bus.num_pass);

console.log(bus.speed);
bus.move();
bus.checkMiles();
