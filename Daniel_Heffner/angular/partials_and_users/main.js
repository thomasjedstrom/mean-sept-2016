var app = angular.module('user_app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			redirectTo: '/users'
		})
		.when('/users', {
			templateUrl: 'partials/users.html'
		})
		.when('/list', {
			templateUrl: 'partials/list.html'
		})
		.otherwise({
			redirectTo: '/users'
		})
})
