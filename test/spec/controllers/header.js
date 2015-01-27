'use strict';

describe('Controller: HeaderCtrl', function() {

  // load the controller's module
  beforeEach(module('optimizeApp'));

  var createHeaderCtrl,
    scope,
    $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($rootScope, $controller, _$location_) {
    scope = $rootScope.$new();
    $location = _$location_;

    createHeaderCtrl = function() {
      return $controller('HeaderCtrl', {
        $scope: scope
      });
    };

  }));


  it('should attach a list of menuItems to the scope', function() {
    var controller = createHeaderCtrl();
    console.log(controller);
    expect(scope.menuItems.length).toBe(4);
  });
});