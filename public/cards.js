(function() {
  var app = angular.module('cards-directive',[]);

  app.controller('hearthstoneCardController', function($scope, $http) {
    $http.get("http://localhost:3000/db")
    .success(function(response) {
      $scope.cards = response["cards"];
    }).error(function(){
      $scope.names = "failed to get file";
    });

    this.heroCard = heroCard;
    function heroCard(hero) {
      if(hero==='neutral') {
        return true
      } else {
        return false;
      }
    }
  });

  app.directive("cardDescription", function() {
    return {
      restrict: "E",
      templateUrl: "card-table.html"
    };
  });
})();
