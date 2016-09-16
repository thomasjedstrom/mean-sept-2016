var user_app = angular.module('user_app', []);

user_app.controller('user_controller', function($scope){
	$scope.fname = '';
	$scope.fnameError = '';
	$scope.lname = '';
	$scope.lnameError = '';
	$scope.language = '';
	$scope.languageError = '';
	$scope.newUser = function(){
		if (($scope.fname != '') && ($scope.lname != '') && ($scope.language != '')){
			$scope.userList.push({fname: this.fname, lname: this.lname, language: this.language});
			$scope.fname = '';
			$scope.fnameError = '';
			$scope.lname = '';
			$scope.lnameError = '';
			$scope.language = '';
			$scope.languageError = '';
		} else {
			if (!($scope.fname)){
				$scope.fnameError = 'First name is required!';
			} else {
				$scope.fnameError = '';
			}
			if (!($scope.lname)){
				$scope.lnameError = 'Last name is required!';
			} else {
				$scope.lnameError = '';
			}
			if (!($scope.language)){
				$scope.languageError = 'Favorite language is required!';
			} else {
				$scope.languageError = '';
			}
		}
	}
	$scope.userList = [];
	$scope.destroyUser = function(idx){
		$scope.userList.splice(idx, 1);
	}
})
