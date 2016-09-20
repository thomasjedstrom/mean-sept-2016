app.controller('user_controller', ['$scope', 'user_factory', function($scope, user_factory){
	$scope.users = [];

	user_factory.showUsers(function (data){
		$scope.users = data;
	})

	$scope.fname = '';
	$scope.lname = '';
	$scope.language = '';
	$scope.errors = [];

	$scope.addUser = function(){
		var fail = user_factory.addUser({fname: $scope.fname, lname: $scope.lname, language: $scope.language});
		if (fail){
			$scope.errors = fail;
		} else {
			$scope.fname = '';
			$scope.lname = '';
			$scope.language = '';
			$scope.errors = [];
		}
	}

	$scope.destroyUser = function(id){
		user_factory.destroy(id);
	}

	$scope.col = 'fname';
	$scope.reverse = false;

	$scope.orderBy = function(col){
		if ($scope.col == col){
			if ($scope.reverse){
				$scope.reverse = false;
			} else {
				$scope.reverse = true;
			}
		} else {
			$scope.col = col;
			$scope.reverse = false;
		}
	}

}])
