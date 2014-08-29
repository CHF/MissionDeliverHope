'use strict';

/**
 * @ngdoc overview
 * @name chfSitesApp
 * @description
 * # chfSitesApp
 *
 * Main module of the application.
 */
angular
  .module('chfSitesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.utils',
    'ui.bootstrap',
    'ngFitText'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
