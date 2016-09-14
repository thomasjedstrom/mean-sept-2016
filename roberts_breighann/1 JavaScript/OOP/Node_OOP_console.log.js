//one person
var Todd = {
	name: "Todd";
	sayName: function(){
		console.log("Todd");
	}
}
Todd.sayName();


//mulpitple people
function NewPerson(name){
	return {
		name:name,
		sayName: function(){
			console.log(name);
		}
	}
}
var Jay = NewPerson("Jay");
var Sara = NewPerson("Sara");
	Jay.sayName();
	Sara.sayName();


//New & This
function Person(name){
	this.name = name;
	this.sayName = function(){
		console.log(name);
	}
}
var Jimmy = new Person("Jimmy");
	Jimmy.sayName();