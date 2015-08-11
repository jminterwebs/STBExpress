var mongoose = require('mongoose');
var Schema = mongoose.Schema;


  module.exports = mongoose.model('CityDB', {
      name: String,
      desc: String

  });
