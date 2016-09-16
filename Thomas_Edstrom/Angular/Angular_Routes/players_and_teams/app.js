var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
	.when('/players',{
		templateUrl: 'partials/players.html',
		controller: 'playersController'
	})
	.when('/teams',{
		templateUrl: 'partials/teams.html',
		controller: 'teamsController'
	})
	.when('/associations',{
		templateUrl: 'partials/associations.html',
		controller: 'associationsController'
	})
	.otherwise({
		redirectTo: '/players'
	});
});

// FACTORIES

myApp.factory('playerFactory', function(){
	var factory = {}
	var players = [
		{name: 'Speros'},
		{name: 'Jimmy'},
		{name: 'Jay'}
	]

	factory.index = function(callback){
		callback(players)
	}
	factory.create = function(player, callback){
		player.teams = [];
		players.push(player);
		callback(players);
	}
	factory.delete = function(id, callback){
		players.splice(id, 1);
		callback(players);
	}

	return factory;
})
myApp.factory('teamFactory', function(){
	var factory = {}
	var teams = [
		{name: 'Seahawks', players: ['Speros']},
		{name: '49ers', players: ['Jimmy']},
		{name: 'Honeybadgers', players: []}
	]

	factory.index = function(callback){
		callback(teams)
	}
	factory.create = function(team, callback){
		team.players = [];
		teams.push(team);
		callback(teams);
	}
	factory.delete = function(id, callback){
		teams.splice(id, 1);
		callback(teams);
	}

	factory.createAssociation = function(id, player, callback){
		teams[id].team.push(player);
		callback(players);
	}

	return factory;
})



// CONTROLLERS

myApp.controller('playersController', ['$scope', 'playerFactory', '$log', function ($scope, playerFactory, $log){
	function setPlayers(data){
		$scope.players = data;
		$scope.player = {};
	}
	$scope.player = {};
	$scope.players = [];

	$scope.index = function(){
		playerFactory.index(setPlayers);
	}
	$scope.index();

	$scope.create = function(){
		playerFactory.create($scope.player, setPlayers);
	}
	$scope.delete = function(id){
		playerFactory.delete(id, setPlayers);
	}
	$log.info($scope);
}]);
myApp.controller('teamsController', ['$scope', 'teamFactory', '$log', function ($scope, teamFactory, $log){
	function setTeams(data){
		$scope.teams = data;
		$scope.team = {};
	}
	$scope.team = {};
	$scope.teams = [];

	$scope.index = function(){
		teamFactory.index(setTeams);
	}
	$scope.index();

	$scope.create = function(){
		teamFactory.create($scope.team, setTeams);
	}
	$scope.delete = function(id){
		teamFactory.delete(id, setTeams);
	}
	$log.info($scope);
}]);
myApp.controller('associationsController', ['$scope', 'playerFactory', 'teamFactory', '$log', function ($scope, playerFactory, teamFactory, $log){

	// TEAMS as ASSOCIATIONS
	function setAssociations(data){
		$scope.associations = data;
		$scope.association = {};
	}
	$scope.associations = [];

	// TEAMS
	function setPlayers(data){
		$scope.players = data;
	}
	$scope.players = [];

	// associations object
	$scope.association = {};

	// intialize
	$scope.index = function(){
		teamFactory.index(setAssociations);
		playerFactory.index(setPlayers);
	}
	$scope.index();




	// CD
	$scope.createAssociation = function(teamID, player){
		teamFactory.createAssociation(teamID, player, setAssociations);
	}
	$scope.delete = function(id){
		associationFactory.delete(id, setAssociations);
	}
	$log.info($scope);
}]);
































