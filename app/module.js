  var app = angular.module('frame', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/path/:name", {
        templateUrl : "app/templates/path.html",
        controller : "contentCtrl"
    })
    .otherwise({
      templateUrl : "app/templates/main.html"
    });
});
