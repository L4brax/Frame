app.controller("pathCtrl", function($scope, $http){
  $http.get("data/frame.json").then(function(response){
    $scope.paths = response.data;
    console.log($scope.paths);
  });
});
