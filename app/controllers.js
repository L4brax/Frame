app.controller("pathCtrl", function($scope){
  $scope.paths = {
    path1 : {
      place: "Université de Nantes",
      degree : "Licence MIAGE",
      started : "08-2015",
      ended : "08-2015",
      discipline : "Java, C, Méthodes UML, Conduite de projets."
    },
    path2 : {
      place: "Université de Nantes",
      degree : "Master MIAGE",
      started : "08-2015",
      ended : "08-2015",
      discipline : "Java, C, Méthodes UML, Conduite de projets."
    }
  };
});

app.controller("expCtrl", function($scope){
  $scope.experiences = {
    exp1 : {
      position : "Developer",
      company : "Accenture",
      started : "04-2015",
      ended : "08-2015",
      place : "Nantes",
      description : "Java development"
    },
    exp2 : {
      position : "Developer Analyst",
      company : "Accenture",
      started : "04-2016",
      ended : "07-2015",
      place : "Nantes",
      description : "Java development"
    }
  };
});
