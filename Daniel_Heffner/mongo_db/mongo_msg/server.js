var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/message_db');
var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	comment: {type: String, required: true}
}, {timestamps: true});
var MessageSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 4 },
	message: { type: String, required: true },
	comments: [CommentSchema]
}, {timestamps: true});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var ObjectId = require('mongoose').Types.ObjectId;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	Message.find({}, function(err, messages){
		if (err){
			console.log('error retrieving messages: ', err);
			res.render('index', {errors: err});
		} else {
			res.render('index', {messages: messages});
		}
	})
})

app.post('/', function(req, res){
	if (req.body.action == 'message'){
		var new_message = new Message({name: req.body.name, message: req.body.message});
		new_message.save(function(err){
			if (err){
				console.log(err);
				res.redirect('/');
			} else {
				console.log('message posted');
				res.redirect('/');
			}
		})
	} else if (req.body.comment) {
		var id = req.body.action;
		Message.findById(ObjectId(id), function(err, message){
			if (err){
				console.log(err);
				res.redirect('/');
			} else {
				message.comments.push({ name: req.body.name, comment: req.body.comment});
				message.save(function(err){
					if (err){
						console.log(err);
						res.redirect('/');
					} else {
						console.log('comment posted');
						res.redirect('/');
					}
				})
			}
		})
	} else {
		res.redirect('/');
	}
})

app.listen(8000, function(){
	console.log('listening on port 8000');
})

