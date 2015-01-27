'use strict';

describe('Controller: WhoamiCtrl', function() {

  // load the controller's module
  beforeEach(module('optimizeApp'));

  var WhoamiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    WhoamiCtrl = $controller('WhoamiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});