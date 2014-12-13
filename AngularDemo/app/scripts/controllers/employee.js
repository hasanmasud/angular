'use strict';

/**
 * @ngdoc function
 * @name angularDemo2App.controller:MytestcontrollerCtrl
 * @description
 * # MytestcontrollerCtrl
 * Controller of the angularDemo2App
 */
angular.module('angularDemo2App')
  .controller('EmployeeCtrl', function ($scope,$http,employeeservice) {
	  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.employeeList = {};
    employeeservice.list(function(emp){
    	$scope.employeeList = emp
    });

  });
