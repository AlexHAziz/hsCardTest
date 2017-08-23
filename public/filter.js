(function() {
  var app = angular.module('filter-directive',[]);

  app.controller('filterController', function(){
    this.cardCategorys = ["minion","secret","spell", "weapon"];
    this.qualityLevels = ["common","rare","epic","legendary"]

    this.categoryTab = 0;
    this.qualityTab = 0;

    this.setCategoryTab = function(newValue) {
      this.categoryTab = newValue;
    };

    this.setQualityTab = function(newValue) {
      this.qualityTab = newValue;
    };

    this.clearFilters = function() {
      this.categoryTab = 0;
      this.qualityTab = 0;
    };
  });

  app.directive("filterButtons", function() {
    return {
      restrict: "E",
      templateUrl: "filter.html"
    };
  });
})();
