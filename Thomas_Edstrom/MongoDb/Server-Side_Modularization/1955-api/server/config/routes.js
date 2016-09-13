var mongoose = require('mongoose');
var People = require('../controllers/peoples.js')
module.exports = function(app){

	// INDEX
	app.get('/', function(req, res) {
		People.index(req, res);
	});

	// CREATE
	app.get('/new/:name', function(req, res) {
		People.create(req, res);
	});

	// DESTROY
	app.get('/remove/:name', function(req, res){
		People.destroy(req, res)
	});

	// SHOW
	app.get('/:name', function(req, res){
		People.show(req, res);
	});



}