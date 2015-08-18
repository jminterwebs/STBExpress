angular.module('Cityapp').controller('CityCreateController', function(City, $scope, $http){
    $scope.cities = City.query();
    console.log($scope.cities);

   // $scope.deleteNote = function(city){confirm(city.city.city);};
   

     $scope.deleteNote = function(city){
         console.log("hi");

          $http({
        method: 'DELETE',
        url: '/city',
        data: city.city,
        headers:{"Content-Type": "application/json;charset=utf-8"} })
    .success( function(data, status, headers, config){
    console.log(data);
    }).
    error(function(data,status,headers,config){

    jQuery('.alert').show();
    console.log('nope');
    })



    };

        
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
