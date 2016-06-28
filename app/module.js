var app = angular.module('frame', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/parcours", {
        templateUrl : "app/templates/path.html",
        controller : "pathCtrl"
    })
    .when("/experiences", {
        templateUrl : "app/templates/exp.html",
        controller : "expCtrl"
    })
    .otherwise({
      templateUrl : "app/templates/main.html"
    });
});
