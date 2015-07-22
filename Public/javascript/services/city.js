angular.module('Cityapp').factory('City', function($resource){
  return $resource('/city/:city', {city: '@city'}, {
      update: {
            method: 'PUT'
      }
        });
});          