angular.module('Cityapp').controller('CityCreateController', function(City, $scope, $http){
    $scope.cities = City.query();
   
  /*
    $scope.createCity = function(){
        $scope.cities.push({city: $scope.city.city,
                            desc: $scope.city.desc});
        console.log($scope.cities.length);
    }
*/
    $scope.city = new City();
   
        
    $scope.saveCity = function(city){
    $http({
        method: 'POST',
        url: '/city',
        data: city})
    .success( function(data, status, headers, config){
   
    $scope.cities.push({city: $scope.city.city,
                        desc: $scope.city.desc});


     
    }).
    error(function(data,status,headers,config){
   
    jQuery('.alert').show();
    console.log('nope');
    });
    };
   
});
