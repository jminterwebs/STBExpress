var express = require('express');
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({extended: false});
var router = express.Router();

//REDIS Connetion
var redis = require('redis');
if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(":")[1]);
}else{
    var client = redis.createClient();
    client.select((process.env.NODE_ENV || 'development').length);
}
//End Redis connection



router.route('/')
  .get(function(req,res){
    client.hkeys('cities', function(error, names){
    res.json(names);
    });
    })
.post(urlencode, function(req,res){
    var newCity = req.body;
    if(!newCity.name || !newCity.description){
      res.sendStatus(400);
      return false;
    }
  client.hset('cities', newCity.name, newCity.description, function(error){
    if(error) throw error;
  });
    res.status(201).json(newCity.name);
});

router.route('/:name')
  .delete(function(req,res){
      client.hdel('cities', req.params.name, function(error){
      if(error) throw error;
      res.sendStatus(204);
    });
})
  .get(function(request,response){
    client.hget('cities', request.params.name, function(error, description){
    response.render('show.ejs',
                  {city:
                    { name: request.params.name, description: description }
                  });
                });
});

module.exports = router;
