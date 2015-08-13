angular.module('Cityapp').controller('CityShowController', function(City, $scope, $routeParams, $location){
    $scope.city = City.query({city: $routeParams.city, isArray: true});
    console.log($scope.city);

});
