angular.module('Cityapp').controller('CityCreateController', function(City, $scope, $http){
    $scope.city = new City();
    
    $scope.saveCity = function(city){
        
       
    $http({
        method: 'POST',
        url: '/city',
        data: city})
    .success( function(data, status, headers, config){
    
   
        
    }).
    error(function(data,status,headers,config){
   
    jQuery('.alert').show();
    console.log('nope');
    });
    
    
         
    };
    

    return true;
});