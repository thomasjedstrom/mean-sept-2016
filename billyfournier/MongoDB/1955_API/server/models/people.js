var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeopleSchema = new mongoose.Schema({
	name: { type: String, required: true},
});
var People = mongoose.model('People', PeopleSchema);

// People.remove({}, {multi:true});
// for (index in a=['Bill Gates', 'Steve Jobs', 'Bill Nye', 'Gilbert Gottfried', 'Charles Martinet', 'Yo-Yo Ma'
// , 'Gary Sinise', 'Tim Berners-Lee']){
// 	console.log(a[index]);
// 	People.create({name: a[index]})
// }

// People.find({name: 'Bill Gates'}, function(err, result){
// 	console.log(JSON.stringify(result));
// });

//      ---  Examples  ---
// var MessageSchema = new mongoose.Schema({
// 	name: { type: String, required: true},
// 	message: { type: String, required: true},
// 	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
// });
//
// var CommentSchema = new mongoose.Schema({
// 	name: String,
// 	text: String,
// 	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
// });
// CommentSchema.path('name').required(true, 'Name cannot be blank');
// CommentSchema.path('text').required(true, 'Comment cannot be blank');
