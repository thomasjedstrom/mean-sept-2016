var ducks = require('../controllers/ducks.js');

module.exports = function(app){
	app.get('/', function(req, res){
		ducks.show_all(req, res);
	})

	app.get('/ducks/new', function(req, res){
		res.render('new');
	})

	app.get('/ducks/:id', function(req, res){
		ducks.show_one(req, res);
	})

	app.post('/ducks', function(req, res){
		ducks.new(req, res);
	})

	app.get('/ducks/:id/edit', function(req, res){
		ducks.edit(req, res);
	})

	app.post('/ducks/:id', function(req, res){
		ducks.update(req, res);
	})

	app.post('/ducks/:id/destroy', function(req, res){
		ducks.destroy(req, res);
	})
}
