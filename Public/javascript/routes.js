angular.module('Cityapp').config(function($routeProvider){
 $routeProvider
    .when('/', {
        templateUrl: "/templates/city/index.html",
        
 })
    .when('/city/:id', {
        templateUrl: "/templates/city/city.html",
        controller: "CityShowController"
 });
    
});