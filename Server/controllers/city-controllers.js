var CityDB = require('../Schema/CitySchema');



    module.exports.create = function(req,res){

       var cityDb = new CityDB(req.body);

        var newCity = req.body;
 if(!newCity.city || !newCity.desc){
    res.sendStatus(400);

 } else{
    cityDb.save (
            CityDB.find({}, function(err,results) {
                res.json(results);
            })
        );
 };

    };

    module.exports.list = function(req, res) {
      CityDB.find({}, function(err, results) {
            res.json(results);

        });
    };

    module.exports.delete = function(req,res){

  CityDB.findOneAndRemove({city: req.body.city}, function(err, results){

    if (err){
      res.status(500).send({error: err});
      // Assume you are going to catch this somewhere...
      throw err;
    }

    else
      res.status(200).send();

  });

};

    module.exports.cityDesc =  function(req,res){
     CityDB.find({city: req.params.city}, function(err, results) {
            res.send(results);
            console.log(results);

        });

    };


