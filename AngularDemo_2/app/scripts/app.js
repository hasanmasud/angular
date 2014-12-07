'use strict';

/**
 * @ngdoc overview
 * @name angularDemo2App
 * @description
 * # angularDemo2App
 *
 * Main module of the application.
 */
angular
  .module('angularDemo2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl'
      })
      .when('/example1', {
        templateUrl: 'views/example1.html',
        controller: 'Example1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
