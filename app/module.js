var app = angular.module('frame', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/path/:name", {
        templateUrl : "app/templates/path.html",
        controller : "pathCtrl"
    })
    .when("/Item2", {
        templateUrl : "app/templates/exp.html",
        controller : "pathCtrl"
    })
    .otherwise({
      templateUrl : "app/templates/main.html"
    });
});
