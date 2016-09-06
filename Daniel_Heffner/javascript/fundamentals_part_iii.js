// So this is the function I made with "this" that would use "new"...

// function personConstructor(name){
// 	this.name = name;
// 	this.distance_travelled = 0;
// 	this.say_name = function(){
// 		console.log(this.name);
// 	}
// 	this.walk = function(){
// 		console.log(this.name + ' is walking');
// 		this.distance_travelled += 3;
// 	}
// 	this.run = function(){
// 		console.log(this.name + ' is running');
// 		this.distance_travelled += 10;
// 	}
// 	this.crawl = function(){
// 		console.log(this.name + ' is crawling');
// 		this.distance_travelled += 1;
// 	}
// }

// ... and here's the actual assignment:
function personConstructor(name){
	var obj = {
		name: name,
		distance_travelled: 0,
		say_name: function(){
			console.log(obj.name);
		},
		say_something: function(say){
			console.log(obj.name + ' says, "' + say + '"');
		},
		walk: function(){
			console.log(obj.name + ' is walking');
			obj.distance_travelled += 3;
		},
		run: function(){
			console.log(obj.name + ' is running');
			obj.distance_travelled += 10;
		},
		crawl: function(){
			console.log(obj.name + ' is crawling');
			obj.distance_travelled += 1;
		}
	}
	return obj
}

// testing
// var felix = personConstructor('Felix');
// console.log(felix.name + ' has travelled ' + felix.distance_travelled + ' distance units');
// for (var i = 0; i < 3; i++){
// 	switch (Math.floor(Math.random()*3 + 1)){
// 		case 1: felix.walk(); break;
// 		case 2: felix.run(); break;
// 		case 3: felix.crawl(); break;
// 	}
// }
// console.log(felix.name + ' has travelled ' + felix.distance_travelled + ' distance units');
// felix.say_something('I\'m so tired!');

function ninjaConstructor(name, cohort){
	var ninja = {};
	ninja['name'] = name;
	ninja['cohort'] = cohort;
	ninja['belt_level'] = 'yellow';
	ninja['levelUp'] = function(){
		ninja['belt_level'] = 'black';
	}
	return ninja;
}

// testing
// tyrion = ninjaConstructor('Tyrion', 'July 2016');
// console.log(tyrion.name);
// console.log(tyrion.cohort);
// console.log(tyrion.belt_level);
// tyrion.levelUp();
// console.log(tyrion.belt_level);
