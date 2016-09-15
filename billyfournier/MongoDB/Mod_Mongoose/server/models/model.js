
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: { type: String, required: true},
	message: { type: String, required: true},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});


var CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');



mongoose.model("Message", MessageSchema);
mongoose.model("Comment", CommentSchema);
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");
