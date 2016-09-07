function personConstructor(name){
	var person = { 
		'name': name,
		'distance_travelled': 0,
		'say_name': function(){alert(this.name);},
		'say_something': function(say){console.log(this.name+" says "+say);},
		'walk': function(){alert(''+this.name+' is walking'); this.distance_travelled+=3;},
		'run': function(){alert(''+this.name+' is runing'); this.distance_travelled+=10;},
		'crawl': function(){alert(''+this.name+'is crawling”'); this.distance_travelled+=1;}		
	}
	return person
}

f = personConstructor('foo');
h.say_name();

function ninjaConstructor(name){
	var ninja = { 
		'name': name,
		'cohort': "Dallas",
		'belt_level': 'Yellow',
		'levelUp': function(belt){this.belt_level= belt ;}
		}
	return ninja;
}

