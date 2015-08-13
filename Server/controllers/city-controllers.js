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



