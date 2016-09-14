var app = angular.module('app', []);
       app.controller('divController', function ($scope){
          	$scope.myName = 'Mitchell'; // your name!
			$scope.myFavoriteLanguage = 'JavaScript';
			$scope.myFavoriteJSLibrary = 'Angular';
      });