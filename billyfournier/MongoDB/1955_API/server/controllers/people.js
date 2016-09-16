var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
  get: function(req,res){
    People.find({}, function(err, result){
      console.log(err);
      console.log(result);
      res.render('index', {result: result});
    });
  },
  create: function(req,res){
    People.create({name: req.params.name}, function(err, result){
      console.log(err);
      console.log(result);
    });
    res.redirect('/');
  },
  remove: function(req,res){
    People.remove({name: req.params.name}, function(err, result){
      console.log(err);
      console.log(result);
    });
    res.redirect('/');
  },
  getOne: function(req,res){
    People.findOne({name: req.params.name}, function(err, result){
      console.log(err);
      console.log(result);
      res.render('index', {result: result});
    });
  },
}
