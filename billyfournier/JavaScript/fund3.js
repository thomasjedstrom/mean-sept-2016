

function PersonConstructor(name){
  var person = {}
  person.name = name;
  person.dist_travelled = 0;
  person.say_name = function(){
    console.log(person.name);
  }
  person.say_something = function(text){
    console.log(person.name + ' says ' + text);
  }
  person.walk = function(){
    person.dist_travelled += 3;
    console.log(person.name + ' is walking.');
  }
  person.run = function(){
    person.dist_travelled += 10;
    console.log(person.name + ' is running.');
  }
  person.crawl = function(){
    person.dist_travelled += 1;
    console.log(person.name + ' is crawling.');
  }

  person.travelled = function(){
    console.log(person.dist_travelled);
  }

  return person
}

bob = PersonConstructor('bob');

bob.say_name()
bob.walk()
