angular.module('Cityapp').controller('CityCreateController', function(City, $scope, $location){
    $scope.city = new City();
    
    $scope.saveCity = function(city){
     city.$save();   
        
    
    };
   
    

    return true;
});