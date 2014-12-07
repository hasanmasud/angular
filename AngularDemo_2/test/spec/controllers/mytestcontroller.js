'use strict';

describe('Controller: MytestcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemo2App'));

  var MytestcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MytestcontrollerCtrl = $controller('MytestcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
