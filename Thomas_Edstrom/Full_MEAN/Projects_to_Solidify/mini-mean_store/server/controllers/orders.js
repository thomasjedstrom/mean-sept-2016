var mongoose 		= require('mongoose'),
	Orders		= mongoose.model('Orders');
require('../models/order.js');

function ordersController(){
	this.index = function(req,res){
		return Orders.find({}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.create = function(req,res){
		return Orders.create(req.body, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.delete = function(req,res){
		Orders.remove({"_id": req.params.id}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		});
	};
	// this.show = function(req,res){
	// 	Orders.find({ "_id": req.params.id }, function(err, result) {
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result[0]});
	// 	});
	// };
}

module.exports = new ordersController();