
var _ = require('lodash');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var CityDb = require('./Schema/CitySchema');
var cityController = require('./controllers/city-controllers');
var port = process.env.PORT || 3303;

var mongoPro = "mongodb://heroku_m32qvs1h:f4r6rpl2nlrb0msn7598bouo97@ds035653.mongolab.com:35653/heroku_m32qvs1h";
var mongoDev = 'mongodb://localhost:27017/citydb2';
mongoose.connect(mongoDev);

app.use(express.static('../Public'));
app.use(bodyparser.json());

app.post('/city', cityController.create );
app.get('/city', cityController.list);

/**********  find value keys based on URL *******/
var routeCity = function(req, res) {
      CityDb.find({city: req.params.city}, function(err, results) {
            res.json(results);
        });
    };

app.get('/city/:city', function(req,res){
     CityDb.find({city: req.params.city}, function(err, results) {
            res.send(results);
            console.log(results);
            console.log(typeof(results));
            console.log(req.params.city);
        });

});

app.delete('/city', function(req,res){

    CityDb.findOneAndRemove({city: req.body.city}, function(err, results){
        if (err) throw err;

    });


});

app.listen(port, function(){
console.log("Listening on port " + port);

});
