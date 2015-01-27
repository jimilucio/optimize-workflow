'use strict';

angular
  .module('optimizeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/social', {
        templateUrl: 'views/social.html',
        controller: 'SocialCtrl'
      })
      .when('/whoami', {
        templateUrl: 'views/whoami.html',
        controller: 'WhoamiCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });