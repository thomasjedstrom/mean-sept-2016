app.factory('teamFactory', function(){
	var teams = [];
	var new_id = 1;

	var factory = {};

	factory.showTeams = function(callback){
		callback(teams);
	}
	factory.destroyTeam = function(id){
		for (var i = 0; i < teams.length; i++){
			if (teams[i].id == id){
				teams.splice(i, 1);
				break;
			}
		}
	}
	factory.addTeam = function(team){
		if (team.name != ''){
			team.id = new_id;
			new_id++;
			teams.push(team);
			return false;
		} else {
			return true;
		}

	}
	return factory;
})
