var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Highscore = require('./api/models/highscoreModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Highscoredb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/highscoreRoutes').default; //importing route
routes(app); //register the route


app.listen(port);


console.log('highscore list RESTful API server started on: ' + port);