// npm install --save express body-parser express-session ejs socket.io mongoose

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded());
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
var RabbitSchema = new mongoose.Schema({
    name:  String,
    age: Number,
});
mongoose.model('Rabbit', RabbitSchema);
var Rabbit = mongoose.model('Rabbit')



// var routes = require("./routes/routes")(app);
app.get("/", function (req, res) {
    res.render('index');
});

app.get("/rabbit/new", function (req, res) {
  console.log('******************');
  var rabbit = new Rabbit({name: 'joey', age: 15});
  console.log(rabbit);
  rabbit.save(function(err) {
    console.log('inside.save');
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  });
});

app.get("/rabbit/:id", function (req, res) {
  console.log('****************** /rabbit/:id ********************');
  Rabbit.find({ _id: req.params.id }, function(err, rabs) {

    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('testing db return ***');
      console.log(JSON.stringify(rabs));
      res.redirect('/');
    };
  });
});


app.get("/rabbit", function (req, res) {
  console.log('****************** /rabbit ********************');
  Rabbit.find({}, function(err, rabs) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('testing db return ***');
      console.log(JSON.stringify(rabs));
      res.redirect('/');
    };
  });
});

app.get("/rabbit/:id/edit", function (req, res) {
  console.log('****************** /rabbit/:id/edit ********************');
  Rabbit.findOne({ _id: req.params.id }, function(err, rabs) {
    console.log('*************** edit *******************');
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('*************** edit **********123*********');
      rabs.name = 'changedName';
      console.log('*************** edit *******************************');
      rabs.age = 25;
      console.log('***************');
      rabs.save(function(err2){
        if(err2) {
          console.log('something went wrong');
        } else {
          console.log('***Change was successful***');
          res.redirect('/');
        }
      });
    };
  });
});

app.post("/rabbit/:id", function (req, res) {
    res.redirect('/');
});

app.post("/rabbit/:id/destroy", function (req, res) {
    res.redirect('/');
});
