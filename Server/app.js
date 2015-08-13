var _ = require('lodash');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var CityDb = require('./Schema/CitySchema');
var cityController = require('./controllers/city-controllers');
var port = process.env.PORT || 3333;

mongoose.connect('mongodb://localhost:27017/citydb');

app.use(express.static('../Public'));
app.use(bodyparser.json());




var buildCity = function(req, res) {
      CityDb.find({}, function(err, results) {
            res.json(results);
        });
    };


app.post('/city', cityController.create );
/*
app.post('/city', function(req,res){

var newCity = req.body;
 if(!newCity.city || !newCity.desc){
    res.sendStatus(400);

 } else{
    res.json(create(newCity));
 };
 console.log(req.body);


});
*/

app.get('/city', cityController.list);

/**********
  find value keys based on URL
**********/

var routeCity = function(req, res) {
      CityDb.find({city: req.params.city}, function(err, results) {
            res.json(results);
        });
    };


app.get('/city/:city', function(req,res){

     CityDb.find({city: req.params.city}, function(err, results) {
            res.json(results);
            console.log(results);
        });

    console.log(req.params.city);
});

app.listen(port, function(){

console.log("Listening on port " + port);

});
