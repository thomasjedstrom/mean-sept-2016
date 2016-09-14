var appModule = angular.module('app', []);

appModule.controller('divController', function($scope){
	$scope.myName = 'Daniel';
	$scope.myFavoriteLanguage = 'Elvish';
	$scope.myFavoriteJSLibrary = 'JQuery';
})
