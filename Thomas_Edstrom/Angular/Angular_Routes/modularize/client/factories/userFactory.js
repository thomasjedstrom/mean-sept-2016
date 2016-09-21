angular.module('app')
.factory('userFactory', [function() {
  /* Our factory is going to provide the methods to gather user data from a RESTful API
		(we aren't quite there yet, but that's where we are going!)
	  Index: return all users
	  Show: return one user based on an a unique selector(often id)
	  Create: generate a new user
	  Update: update a specific user
	  Delete: remove a specific user

	  Our controller is going to determine what happens once we complete the change in the dataset using a callback function.
	  These are denoted below, for clarity as: functionPassedByControllerAsAnArgTo **Method**

	  Bonus: convert these callbacks to promises!
  */
	function UserConstructor() {
		var users = [
			{name: "mike"}
		];

		// INDEX
		this.index = function(callback) {
			if (typeof(callback) === 'function') {
				callback(users);
			}
		};

		// CREATE
		this.create = function(newUser) {
			if (typeof(newUser) === 'object') {
				users.push(newUser)
			}
		};

		// UPDATE
		this.update = function(updateUser, idx, callback) {
			if (users[idx]) {
				for (var key in updateUser) {
					users[idx][key] = updateUser[key];
				}
			}
			if (typeof(callback) === 'function') {
				callback(users[idx]);
			}
		}

		// SHOW
		this.show = function(idx, callback) {
			if (typeof(callback) === 'function') {
				callback(users[idx]);
			}
		}

		// DELETE
		this.delete = function(idx, callback) {
			if (users[idx]) {
				users.splice(idx, 1);
			}
			if (typeof(callback) === 'function') {
				callback(users);
			}
		}
	}
	return (new UserConstructor());
}]);
