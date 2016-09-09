var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

var user = {
    name: null,
    location: null,
    language: null,
    comment: null
}


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
})

app.post('/result', function(req, res){
    console.log("POST DATA \n\n", req.body);
    user = req.body;
    console.log('------------')
    console.log(user)
    console.log('------------')
    res.redirect('/result');
});

app.get('/result', function(req, res){
    res.render('result', {user: user})
})



app.listen(8000, function() {
  console.log("listening on port 8000");
})