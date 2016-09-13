// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use("/static", express.static(__dirname + '/static'))


// Mongo
var connection = mongoose.connect('mongodb://localhost/messageboard_db');

var Schema = mongoose.Shema;

var postSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 4 },
	content: { type: String, required: true },
	_comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
	},
	{ timestamps: true }
);
var commentSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 4 },
	content: { type: String, required: true },
	_post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
	},
	{timestamps: true }
);

var Post = mongoose.model('Post', postSchema)
var Comment = mongoose.model('Comment', commentSchema)



// Routes
// INDEX
var errors = null


app.get('/', function(req, res) {
	Post.find({})
		.populate('_comments')
		.exec(function(err, result){
			if (err) { console.log(err) };
			res.render('index', { data: result, errors: errors });
			errors = null;
	});
});


// CREATE POSTS
app.post('/posts', function(req, res) {
	Post.create(req.body, function(err, result){
		if(err) {
			errors = err;
			console.log("================")
			console.log(errors)
			console.log("================")
		};
		res.redirect('/')
	});
});


// CREATE COMMENTS
app.post('/posts/:id', function (req, res){
	Post.findOne({_id: req.params.id}, function(err, post){
		var comment = new Comment(req.body);
		comment._post = post._id;
		post._comments.push(comment);
		comment.save(function(err){
			if(err) {
				errors = err;
			} 
			post.save(function(err){
				if(err) {
					errors = err;
				} 
				res.redirect('/');
			});
		});
	});
});



// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port " + port);
})














