'use strict';

/**
 * @ngdoc function
 * @name angularDemo2App.controller:Example1Ctrl
 * @description
 * # Example1Ctrl
 * Controller of the angularDemo2App
 */
angular.module('angularDemo2App')
  .controller('Example1Ctrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.names = ['masud','rana'];
    $scope.addName = function(){
    	$scope.names.push($scope.enteredName);
    	$scope.enteredName = '';
    }
    
  });
