var mongoose = require('mongoose');
// var Rabbit = mongoose.model('Rabbit');
var Rabbit = require('../controllers/rabbits.js')
module.exports = function(app){
	// INDEX
	app.get('/', function(req, res) {
		Rabbit.index(req, res);
	});

	// NEW
	app.get('/new/', function(req, res) {
		res.render('new');
	})

	// CREATE
	app.post('/', function(req, res) {
		Rabbit.create(req, res);
	});

	// SHOW
	app.get('/:id', function(req, res){
		Rabbit.show(req, res);
	});


	// EDIT
	app.get('/:id/edit', function(req, res) {
		Rabbit.edit(req, res);
	});

	// UPDATE
	app.post('/:id', function(req, res){
		Rabbit.update(req, res);
	});

	// DESTROY
	app.post('/:id/delete', function(req, res){
		Rabbit.destroy(req, res)
	});

}