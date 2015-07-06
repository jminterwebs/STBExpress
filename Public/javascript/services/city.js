angular.module('Cityapp').factory('City', function($resource){
    return $resource('/city/:id'); 
});          