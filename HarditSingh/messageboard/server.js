var express = require("express"),
	path = require("path"),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');

// Schema 
	var Schema = mongoose.Schema;
	var commentSchema = new mongoose.Schema({
		comment_by : {type: String, required: true, minlenght: [4,"Name has to be atleast 4 characters"]},
		comment: {type:String, required: true}
	},{timestamps:true});

	var messageSchema = new mongoose.Schema({
		posted_by : {type: String, required: true, minlenght: [4,"Name has to be atleast 4 characters"]},
		message: {type:String, required: true},
		comments: [commentSchema]
	},{timestamps:true});

	var Messages = mongoose.model('Messages',messageSchema);

// Routes
	app.get('/', function(req, res) {
		Messages.find({}, function(err, messages) {
			res.render("index",{messages:messages});
		});
	});
	app.post('/message', function(req, res) {
		console.log("POST DATA", req.body);
		var message = new Messages({
			posted_by: req.body.name,
			message: req.body.message
		});
		message.save(function(err) {
			if(err) {
				console.log('something went wrong');
			} 
			else { // else console.log that we did well and then redirect to the root route
				console.log('successfully added a user!');
				res.redirect('/');
			}
		});
	});
	app.post('/comment/:id', function(req, res) {
		console.log("POST DATA", req.params.id);
		data = {
			comment_by: req.body.cname,
			comment: req.body.comment
		};
		Messages.update({'_id': req.params.id},{$push:{comments:data}}, function(err) {
		res.redirect('/');
		});
	});

		app.get('/message/:id/destroy',function(req,res){
		query = {
			'_id': req.params.id
		}
		Messages.remove(query, function(err) {
			res.redirect('/');
		});
	})

var server = app.listen(port, function() {});