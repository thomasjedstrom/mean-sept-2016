app.factory('playerFactory', function(){
	var players = [];
	var new_id = 1;

	var factory = {};

	factory.showPlayers = function(callback){
		callback(players);
	}
	factory.destroyPlayer = function(id){
		for (var i = 0; i < players.length; i++){
			if (players[i].id == id){
				players.splice(i, 1);
				break;
			}
		}
	}
	factory.addPlayer = function(player){
		if (player.name != ''){
			player.id = new_id;
			new_id++;
			players.push(player);
			return false;
		} else {
			return true;
		}
	}
	factory.assignPlayer = function(info){
		if (!info.p_id || !info.t_name) return null;
		for (var i = 0; i < players.length; i++){
			if (info.p_id == players[i].id){
				if (!players[i].team){
					players[i].team = info.t_name;
					break;
				} else {
					alert('Clear player\'s assignment first!');
					break;
				}
			}
		}
	}
	factory.clearTeam = function(id){
		for (var i = 0; i < players.length; i++){
			if (players[i].id == id){
				players[i].team = null;
				break;
			}
		}
	}
	return factory;
})
