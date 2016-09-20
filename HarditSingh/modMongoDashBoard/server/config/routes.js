var LionsController = require('../controllers/LionsController.js');

module.exports = function(app) {
	app.get('/', LionsController.index);
	app.get('/add', LionsController.addPage);
	app.get('/lion/:id',LionsController.profile);
	app.post('/lions', LionsController.add);
	app.get('/lion/:id/edit',LionsController.editPage);
	app.post('/lion/:id', LionsController.edit);
	app.get('/lion/:id/destroy',LionsController.destroy);
}