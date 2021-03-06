angular.module('sticky',[])
    .directive('sticky', function($window,$timeout) {
      return {
          link: function (scope, element, attrs) {
                $timeout(function () {
                    angular.element(element).stickyTableHeaders();
                }, 1000);
              scope.$watch('achievements.active', function() {
                $timeout(function () {
                    angular.element(element).stickyTableHeaders();
                }, 1000);
              });

          }
      };
});