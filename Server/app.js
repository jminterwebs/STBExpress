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

var cities = [{
               'city': 'Sayville',
               'desc': 'Home'},
              {
               'city': 'Springfield',
               'desc': 'Homer'}
             ];



var create = function(city){

CityDb.save();

}

var buildCity = function(){
 return JSON.parse(JSON.stringify(cities));

};


app.post('/city', cityController.create);
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
app.get('/city', function(req,res){
res.send(buildCity());
});


app.get('/city/:city', function(req,res){



    var cityFind = function(cityRoute){
        return _.find(buildCity(), function(city){
        return city.city === cityRoute;

    });
    };
    res.json(cityFind(req.params.city));
    console.log(req.params.city);
});

app.listen(port, function(){

console.log("Listening on port " + port);

});
