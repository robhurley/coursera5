(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController ($scope) {
    $scope.resultString = "";
    
    $scope.checkLunch = function() {
      var splitStrings = $scope.dishes.split(",");
      if(splitStrings.length > 3)
        $scope.resultString = "Too much!";
      else
        $scope.resultString =  "Enjoy!";
    };
    
  }
  
})();