app.controller('teamsController', ['$scope', 'teamFactory', function($scope, teamFactory){
	$scope.teams = [];
	teamFactory.showTeams(function(data){
		$scope.teams = data;
	})

	$scope.newTeam = '';

	$scope.destroyTeam = function(id){
		teamFactory.destroyTeam(id);
	}

	$scope.addTeam = function(){
		var newTeam = {name: this.newTeam};
		var fail = teamFactory.addTeam(newTeam);
		if (fail){
			return null;
		}
		$scope.newTeam = '';
	}

}])
