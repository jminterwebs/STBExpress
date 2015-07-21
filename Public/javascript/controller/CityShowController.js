angular.module('Cityapp').controller('CityShowController', function(City, $scope, $routeParams, $location){
    $scope.cities = City.get({id: $routeParams.id});   
});