app.controller('playersController', ['$scope', 'playerFactory', function($scope, playerFactory){
	$scope.players = [];
	playerFactory.showPlayers(function(data){
		$scope.players = data;
	})

	$scope.newName = '';

	$scope.destroyPlayer = function(id){
		playerFactory.destroyPlayer(id);
	}

	$scope.addPlayer = function(){
		var newPlayer = {name: this.newName, team: null};
		var fail = playerFactory.addPlayer(newPlayer);
		if (fail){
			return null;
		}
		$scope.newName = '';
	}

}])
