function personConstructor(name){
	var person = {};

	person.name = name;
	person.distance_travelled = 0;
	person.intro = function(){
		console.log('Hi my name is ' + person.name);
	}
	person.say_something = function(){
		console.log(person.name + ' I am pretty cool ' + person.name + ' says everyone I know.');
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
		console.log(person.name + ' is crawling.')
		person.distance_travelled += 1;
		console.log('Total distance travelled = ' + person.distance_travelled);
	}

	return person;
}

// var Helen = PersonConstructor('Helen');

// Helen.intro();
// Helen.say_something();
// Helen.walk();
// Helen.run();
// Helen.crawl();

function ninjaConstructor(name, cohort){
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
			console.log('Congratulations ' + ninja.name + ' You learn fast! You now hold a ' + ninja.belt + ' belt in your current stack!')
		}
		else{
			console.log('Belt must be Red or Black.')
		}
	}
	return ninja;
}