'use strict';

angular.module('cxshowcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('showcase.json').success(function(data) {
      $scope.showcase = data;
    }).error(function(data) {
      // log error
    });
  });
