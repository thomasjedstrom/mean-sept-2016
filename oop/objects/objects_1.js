/* ********OBJECTS********
 
practice making objects!

public methods: makeNoise,
public properties: name, wheels, riders
private methods: addCount 

********END********* */

var VehicleConstructor = function(name, wheels, riders){
	this.name = name;
	this.wheels = wheels;
	this.riders = riders;
	if (!(this instanceof VehicleConstructor)) {
   		// the constructor was called without "new".
   		return new VehicleConstructor(name, wheels, riders);
 	}
	console.log('sweet ride!')
}

VehicleConstructor.prototype.makeNoise = function(noise){
	noise = noise || 'honk'
	console.log(noise);
}

var bike = new VehicleConstructor('bike', 2, 1);
bike.makeNoise('ring');

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

/*  **************testcode**************      */
function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.name = name;              
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {   
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
console.log(Pariece.name);



