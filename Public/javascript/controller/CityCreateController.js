angular.module('Cityapp').controller('CityCreateController', function(City, $scope, $http){
    $scope.cities = City.query();
    console.log($scope.cities);

   // $scope.deleteNote = function(city){confirm(city.city.city);};
   
   $scope.deleteNote = function(city){

  // Make the request
  $http({
    method: 'DELETE',
    url: '/city',
    data: city.city,
    headers:{"Content-Type": "application/json;charset=utf-8"} 
  })
  // On success:
  .then(function (){
    var index = $scope.cities.indexOf(city.city);
    var cityindex = city.city;
    $scope.cities.splice(index, 1);
  })
  // On error:
  .catch(function (){
    // Do something better than this:
    alert("Something bad happened");
  })

  .finally(function (){
    // Re-enable the button.
    city.deleting = false;
  })

  // Disable the delete button and show a loading animation based on
  // this value (use `ng-disabled`).
  city.deleting = true;


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
