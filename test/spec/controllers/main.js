'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cxshowcaseApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of otherworks to the scope', function () {
    expect(scope.otherworks.length).toBe(6);
  });
});
