app.controller("pathCtrl", function($scope, $http){
  $http.get("data/frame.json").then(function(response){
    $scope.paths = response.data.frame;
  });
  $http.get("data/main.json").then(function(response){
    $scope.mainItems = response.data.main;
    console.log($scope.mainItems.links);
  });
});

app.controller("contentCtrl", function($scope, $http, $routeParams){
  $http.get("data/frame.json").then(function(response){
    var frameData = response.data.frame;
    var content = function (frameDataf, routeParams) {
      for (var i = 0; i < frameDataf.length;i++){
        if (frameDataf[i].name == routeParams.name) {
          return frameDataf[i].content;
        }
      };
    }
    $scope.itemContent = content(frameData,$routeParams);
    $scope.itemName = $routeParams.name;
  });
});
