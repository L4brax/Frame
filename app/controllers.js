app.controller("pathCtrl", function($scope, $http){
  $http.get("data/frame.json").then(function(response){
    $scope.paths = response.data.paths;
  });
});

app.controller("expCtrl", function($scope){
  $scope.experiences = [{
    position : "Header1",
    company : "Header2",
    started : "04-2015",
    ended : "08-2015",
    place : "Place",
    description : "Lorem ipsum"
  },
  {
    position : "Header1",
    company : "Header2",
    started : "04-2016",
    ended : "07-2015",
    place : "Place2",
    description : "Lorem Ipsum"
  }];
});
