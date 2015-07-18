angular.module('Cityapp').controller('CityIndexController', function(City, $scope){
    $scope.cities = City.query();
    //window.sc = $scope;

    return true;
});