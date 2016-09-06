function personConstructor(name){
	var person = {
		name: name;
		distance_travelled: 0;
		say_name: console.log(self.name);
		say_something: function(param1){
			console.log(self.name + " " + param1);
		};
		walk: function(){
			console.log(self.name + " is walking");
			distance_travelled+=3;
		}
		run: function(){
			console.log(self.name + " is running");
			distance_travelled+=10;
		}
		crawl: function(){
			console.log(self.name + " is crawling");
			distance_travelled+=1;
		}
	}
}

function ninjaConstructor(name){
	var ninja = {
		name: name;
		cohort: cohort;
		belt-level: 1;
		levelUp: function(){
			belt-level+=1;
		}
	}
}