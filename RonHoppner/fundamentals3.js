function PersonConstructor(name){
	var person = {};

	person.name = name;
	person.distance_travelled = 0;
	person.intro = function(){
		console.log('Hi my name is ' + person.name);
	}
	person.say_something = function(){
		console.log(person.name + ' had to skip forward in the platform to figure out how to do this and ' + person.name + ' finds that to be more than a little irriatting.');
	}
	person.walk = function(){
		console.log(person.name + ' is walking.');
		person.distance_travelled += 3;
		console.log('Total distance travelled = ' + person.distance_travelled);
	}
	person.run = function(){
		console.log(person.name + ' is running.');
		person.distance_travelled += 10;
		console.log('Total distance travelled = ' + person.distance_travelled);
	}
	person.crawl = function(){
		console.log(person.name + ' has been drinking to much and has to crawl.')
		person.distance_travelled += 1;
		console.log('Total distance travelled = ' + person.distance_travelled);
	}

	return person;
}

// var Tom = PersonConstructor('Tom');

// Tom.intro();
// Tom.say_something();
// Tom.walk();
// Tom.run();
// Tom.crawl();

function NinjaConstructor(name, cohort){
	var ninja = {};

	ninja.name = name;
	ninja.location = cohort;
	ninja.belt = 'Yellow';

	ninja.identify = function(){
		console.log('My name is ' + ninja.name + ' and I am studying at the Coding Dojo in ' + ninja.location + '. I currently hold a ' + ninja.belt + ' belt.');
	}
	ninja.improve = function(belt){
		if (belt == "Red" || belt == "Black"){
			ninja.belt = belt
			console.log('Congratulations ' + ninja.name + '! Your skills are remarkable. You now hold a ' + ninja.belt + ' belt in whatever it was you were just studying.')
		}
		else{
			console.log('Belt must be Red or Black.')
		}
	}
	return ninja;
}

var DuaneTrucks = NinjaConstructor('Duane Trucks', 'Widespread Panic Land');
// DuaneTrucks.identify();
// DuaneTrucks.improve('Purple');
// DuaneTrucks.improve('Red');
