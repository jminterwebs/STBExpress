var CityDB = require('../Schema/CitySchema');

    module.exports.create = function(res,req){
        var cityDb = new CityDB(req.body);
        cityDb.save();
    }

    /*
    var newCity = req.body;
 if(!newCity.city || !newCity.desc){
    res.sendStatus(400);

 } else{
    res.json(create(newCity));
 };
 console.log(req.body);

 */
