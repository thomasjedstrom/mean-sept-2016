var mongoose 		= require('mongoose'),
	Products		= mongoose.model('Products');
require('../models/product.js');

function productsController(){
	this.index = function(req,res){
		return Products.find({}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.create = function(req,res){
		return Products.create(req.body, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		})
	};

	this.delete = function(req,res){
		Products.remove({"_id": req.params.id}, function(err, result){
			if(err){
				return res.json({errors: err});
			};
			res.json({data: result});
		});
	};
	// this.show = function(req,res){
	// 	Products.find({ "_id": req.params.id }, function(err, result) {
	// 		if(err){
	// 			console.log(err);
	// 			res.json({errors: err});
	// 			return;
	// 		};
	// 		res.json({data: result[0]});
	// 	});
	// };
}

module.exports = new productsController();