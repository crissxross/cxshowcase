'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('cxshowcaseApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should match current location to menu', function () {
    expect(scope.menuClass.current).toBe('active');
  });
});
