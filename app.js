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


app.get('/city', function(req,res){
res.send(JSON.parse(JSON.stringify(cities)));   
});

app.post('/city', function(req,res){
res.json(create(req.body));
    
    
    
});

 
app.listen(port, function(){

console.log("Listening on port " + port);

});
        
        