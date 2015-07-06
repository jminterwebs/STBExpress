angular.module('Cityapp').controller('CityIndexController', function(City, $scope){
    $scope.cities = City.query();
    console.log($scope.cities);
   
    
    
    
    
    
    window.sc = $scope;

    return true;
});