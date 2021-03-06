'use strict';

angular.module('cxshowcaseApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? 'active' : '';
    };
  });
