var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
	.when('/users',{
		templateUrl: 'partials/customUsers.html',
		controller: 'CustomizeUsersController'
	})
	.when('/list',{
		templateUrl: 'partials/userList.html',
		controller: 'UserListController'
	})
	.otherwise({
		redirectTo: '/users'
	});
});





myApp.factory('userFactory', function(){
	var factory = {}
	var users = [
		{first_name: 'Yukihiro', last_name: 'Matsumoto', language: 'Ruby'},
		{first_name: 'Ryan', last_name: 'Dahl', language: 'JavaScript'},
		{first_name: 'Brendon', last_name: 'Eich', language: 'JavaScript'}
	]

	factory.index = function(callback){
		callback(users)
	}
	factory.create = function(user, callback){
		users.push(user);
		callback(users);
	}
	factory.delete = function(id, callback){
		users.splice(id, 1);
		callback(users);
	}

	return factory;
})






myApp.controller('CustomizeUsersController', ['$scope', 'userFactory', '$log', function ($scope, userFactory, $log){
	function setUsers(data){
		$scope.users = data;
		$scope.user = {};
	}
	$scope.user = {};
	$scope.users = [];

	$scope.index = function(){
		userFactory.index(setUsers);
	}
	$scope.index();

	$scope.create = function(){
		userFactory.create($scope.user, setUsers);
	}
	$scope.delete = function(id){
		userFactory.delete(id, setUsers);
	}
	$log.info($scope);
}]);

myApp.controller('UserListController', ['$scope', 'userFactory', function ($scope, userFactory) {
	function setUsers(data){
		$scope.users = data;
		$scope.user = {};
	}

	$scope.user = {};
	$scope.users = [];

	$scope.index = function(){
		userFactory.index(setUsers);
	}
	$scope.index();
}]);








































