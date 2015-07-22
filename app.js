var _ = require('lodash');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3333;      




app.use(express.static('Public'));
app.use(bodyparser.json());

var cities = [{'id' : 1,
               'city': 'Sayville',
               'desc': 'Home'},
              {'id' : 2,
               'city': 'Springfield',
               'desc': 'Homer'}
             ];
var lastId = 2;


var create = function(city){
lastId = lastId +1;
city.id = lastId;
    
    
cities.push(city);
return city};

var buildCity = function(){
  return JSON.parse(JSON.stringify(cities));   
};




app.post('/city', function(req,res){
 var newCity = req.body;
 if(!newCity.city || !newCity.desc){
    res.sendStatus(400);
    
 } else{
    res.json(create(newCity));
 };
 console.log(cities.length);
    
    
});
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
        

    
        