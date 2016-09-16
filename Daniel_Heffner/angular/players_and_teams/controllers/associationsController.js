app.controller('associationsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory){
	$scope.players = [];
	$scope.selectPlayers = [];
	playerFactory.showPlayers(function(data){
		$scope.players = data;
	})
	$scope.teams = [];
	$scope.selectTeams = [];
	teamFactory.showTeams(function(data){
		$scope.teams = data;
	})

	$scope.assignPlayer = function(){
		var assignment = { p_id: $scope.selectPlayers.id, t_name: $scope.selectTeams.name };
		playerFactory.assignPlayer(assignment);
	}

	$scope.clearTeam = function(id){
		playerFactory.clearTeam(id);
	}
}])
