var MainController = require('../controllers/MainController.js');

module.exports = function(app){
  app.get('/', MainController.index);
  app.get('/new/:name',MainController.addName);
  app.get('/remove/:name',MainController.removeName);
  app.get('/:name',MainController.getName);
}

