module.exports= function Route(app){

    // root route to render the index.ejs view
    app.get('/', function(req, res) {
        res.render("index");
    })
    // post route for adding a user
    app.post('/results', function(req, res) {
        console.log("POST DATA", req.body);
        var info={
            name:req.body.name,
            location: req.body.location,
            language: req.body.language,
            comment: req.body.comment
        };

        res.render("results", {info: info});
    })
}
