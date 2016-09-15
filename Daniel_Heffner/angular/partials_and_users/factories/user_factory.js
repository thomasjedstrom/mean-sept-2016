app.factory('user_factory', function(){
	var users = [
		{id: 1, fname: 'Cleveland', lname: 'Williams', language: 'JavaScript'},
		{id: 2, fname: 'Daniel', lname: 'Heffner', language: 'Python'}
	];
	var new_id = 3;
	var factory = {};

	factory.showUsers = function(callback){
		callback(users);
	}

	factory.addUser = function(new_user){
		var errors = [];
		if (new_user.fname == ''){
			errors.push('must have a first name');
		}
		if (new_user.lname == ''){
			errors.push('must have a last name');
		}
		if (new_user.language == ''){
			errors.push('must have a favorite language');
		}
		if (errors.length > 0){
			return errors;
		}
		new_user.id = new_id;
		new_id++;
		users.push(new_user);
	}

	factory.destroy = function(id){
		var i = 0;
		while (users[i].id != id && i < users.length){
			i++;
		}
		if (i < users.length){
			users.splice(i, 1);
		}
	}

	return factory;
})
