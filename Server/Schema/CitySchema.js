var mongoose = require('mongoose');
var Schema = mongoose.Schema;


  module.exports = mongoose.model('CityDB', {
      city: String,
      desc: String

  });
