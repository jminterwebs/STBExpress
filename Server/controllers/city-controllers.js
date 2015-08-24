var CityDB = require('../Schema/CitySchema');



    // Save city to database
  module.exports.create = function(req,res){

    var cityDb = new CityDB(req.body);
    var newCity = req.body;

     if(!newCity.city || !newCity.desc){
        res.sendStatus(400);
     }
     else{
            cityDb.save (CityDB.find({}, function(err,results) {
                res.json(results);
            })
            );
    };
 };



    // Lists cities
  module.exports.list = function(req, res) {

     CityDB.find({}, function(err, results) {
                 res.json(results);
        });
    };

    // Deletes cities on click of red X
  module.exports.delete = function(req,res){

    CityDB.findOneAndRemove({city: req.body.city}, function(err, results){

        if (err){
            res.status(500).send({error: err});
            throw err;
        }
        else
            res.status(200).send();

    });

  };

    // Routes to page to display city and desc
  module.exports.cityDesc =  function(req,res){

      CityDB.find({city: req.params.city}, function(err, results) {

            res.send(results);
      });
  };


