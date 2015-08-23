
var _ = require('lodash');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var CityDb = require('./Server/Schema/CitySchema');
var cityController = require('./Server/controllers/city-controllers');
var port = process.env.PORT || 3333;

var mongoPro = "mongodb://heroku_rkzx8bcz:j7qq3peas9tgt5dds2oqd8dsg@ds035583.mongolab.com:35583/heroku_rkzx8bcz";
var mongoDev = 'mongodb://localhost:27017/citydb';
mongoose.connect( mongoPro);

app.use(express.static(__dirname +'/Public'));
app.use(bodyparser.json());

app.post('/city', cityController.create );
app.get('/city', cityController.list);
app.get('/city/:city', cityController.cityDesc);
app.delete('/city', cityController.delete);

app.listen(port, function(){
console.log("Listening on port " + port);

});
