var mongoose 		= require('mongoose'),
	Users 			= mongoose.model('Users');
require('../models/user.js');

function usersController(){
	this.index = function(req,res){
		return Users.find({}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.create = function(req,res){
		return Users.create(req.body, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.delete = function(req,res){
		Users.remove({"_id": req.params.id}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		});
	};
	// this.show = function(req,res){
	// 	Users.find({ "_id": req.params.id }, function(err, result) {
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result[0]});
	// 	});
	// };
}

module.exports = new usersController();