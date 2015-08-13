angular.module('Cityapp').controller('CityShowController', function(City, $scope, $routeParams, $location){
    $scope.city = City.get({city: $routeParams.city});
    console.log($scope);

    
});
