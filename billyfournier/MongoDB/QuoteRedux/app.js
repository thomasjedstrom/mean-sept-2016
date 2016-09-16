// npm install --save express body-parser express-session ejs socket.io mongoose

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojorocks'}));



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/bower_components/"));
app.use(express.static(__dirname + "/static"));

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});


// require the mongoose module
var mongoose = require('mongoose');
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model

mongoose.connect('mongodb://localhost/basic_mongoose');
var QuoteSchema = new mongoose.Schema({
    text:  String,
    author: String,
});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')


// var routes = require("./routes/routes")(app);
app.get("/", function (req, res) {
    res.render('index');
});

app.get("/quotes", function (req, res) {
  Quote.find({}, function(err,result){
    if(err){
      console.log(err);
    } else {
      console.log(result);
      res.render('quotes', {quotes: result});
    }
  });
});

app.post("/quotes", function (req, res) {
    Quote.create(req.body, function(err, result){
      if(err){
        console.log(err);
        console.log('something went wrong');
      } else {
        console.log(result);
        res.redirect('/quotes');
      }
    })
});
app.get("/show", function (req, res) {
    Quote.find({}, function(err,result){
      (err) ? console.log(err):console.log(result[1].author);
    });
});

// app.get("/rabbit/new", function (req, res) {
//   console.log('******************');
//   var rabbit = new Rabbit({name: 'joey', age: 15});
//   console.log(rabbit);
//   rabbit.save(function(err) {
//     console.log('inside.save');
//     if(err) {
//       console.log('something went wrong');
//     } else { // else console.log that we did well and then redirect to the root route
//       console.log('successfully added a user!');
//       res.redirect('/');
//     }
//   });
// });
//
