'use strict';

/**
 * @ngdoc service
 * @name optimizeApp.controller:HeaderCtrl
 * @scope HeaderCtrl
 *
 * @description
 * Header controller
 *
 * @example
 * ```html
 *
 *
 * ```
 */
angular.module('optimizeApp')
  .controller('HeaderCtrl', function($scope, $location) {

    /**
     * @ngdoc method
     * @name getActive
     * @methodOf optimizeApp.controller:HeaderCtrl
     *
     * @description
     * render the twitter data inside html element
     *
     * @returns {string} the actual menu item selected
     */
    function getActive() {
      if ($location.path() !== '/') {
        return $location.path().replace('/', '');
      } else {
        return 'home';
      }
    }
    $scope.activeMenu = getActive();

    /**
     * @ngdoc property
     * @name menuItems
     * @propertyOf optimizeApp.controller:HeaderCtrl
     *
     * @description
     * list of menu' items
     *
     *
     */
    $scope.menuItems = [{
      url: 'home',
      name: 'Home'
    }, {
      url: 'whoami',
      name: 'Who am I'
    }, {
      url: 'social',
      name: 'Social'
    }, {
      url: 'contact',
      name: 'Contact'
    }];


  });