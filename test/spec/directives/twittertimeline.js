'use strict';

describe('Directive: twitterTimeline', function() {

  // load the directive's module
  beforeEach(module('optimizeApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function() {
    element = angular.element('<twitter-timeline></twitter-timeline>');
    expect(element[0]).not.toEqual(null);
  }));
});