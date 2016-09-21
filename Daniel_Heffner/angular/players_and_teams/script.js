var app = angular.module('league_app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			redirectTo: '/associations'
		})
		.when('/players', {
			templateUrl: 'partials/players.html'
		})
		.when('/teams', {
			templateUrl: 'partials/teams.html'
		})
		.when('/associations', {
			templateUrl: 'partials/associations.html'
		})
		.otherwise({
			redirectTo: '/associations'
		})
})
