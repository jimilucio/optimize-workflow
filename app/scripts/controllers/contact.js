'use strict';

angular.module('optimizeApp')
  .controller('ContactCtrl', function($scope) {
    $scope.social = [{
      'type': 'facebook',
      'url': 'http://facebook.com/lucianomurruni'
    }, {
      'type': 'linkedin',
      'url': ''
    }, {
      'type': 'twitter',
      'url': ''
    }, {
      'type': 'google+',
      'url': ''
    }, {
      'type': 'mail',
      'url': 'luciano.murruni@gmail.com'
    }];
  });