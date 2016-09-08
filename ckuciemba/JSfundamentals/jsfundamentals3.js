// PART 1:
phrase="hello there buddy";
name="bob";
function personConstructor(name){
    var name_ob = {
        name:name,
        sayName: function(){
            console.log("hello" + name_ob.name);
        },
        saySomething: function something(phrase){
            console.log(name_ob.name + "says" + phrase);
        },
        distance_travelled: 0,
        walk: function walking(){
            alert(name_ob.name + "is walking");
            name_ob.distance_travelled += 3;
        },
        run: function running(){
            alert(name_ob.name +" is running");
            name_ob.distance_travelled +=10;
        },
        craw: function crawling(){
            alert(name_ob.name + "is crawling");
            name_ob.distance_travelled += 1;
        },
    }
    console.log(name_ob);
}


// PART 2: Now create a ninjaConstructor that can be used to create Ninjas that each have a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

ninjaConstructor(name, cohort){
    var ninja{
        name: name,
        cohort: cohort,
        belt_level: "yellow-belt",
        levelUp: functionlevel(){
            if(ninja.belt_level=='yellow-belt'){
                ninja.belt_level=='red-belt');
                }
            elif(ninja.belt_level=='red-belt'){
                ninja.belt_level=='black-belt';
            }return ninja.belt_level;
        },
    }console.log(ninja);
}
