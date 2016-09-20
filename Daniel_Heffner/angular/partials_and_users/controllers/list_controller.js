app.controller('list_controller', ['$scope', 'user_factory', function($scope, user_factory){
	$scope.users = [];

	user_factory.showUsers(function (data){
		$scope.users = data;
	})

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
