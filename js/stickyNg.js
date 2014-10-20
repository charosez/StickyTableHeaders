angular.module('stickyNg',[])
    .directive('sticky', function($window,$timeout) {
      return {
          link: function (scope, element, attrs) {
              $timeout(function () {
                  angular.element(element).stickyTableHeaders({
                      collapseClass: attrs.collapseClass,
                  });
              }, 1000);
              scope.$watch(attrs.selectorItems, function() {
                $timeout(function () {
                    angular.element(element).stickyTableHeaders({
                        collapseClass: attrs.collapseClass
                    });
                }, 1000);
              });

          }
      };
});
