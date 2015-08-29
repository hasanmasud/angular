'use strict'

angular.module('myApp',[]).controller('MyController',['$scope',function($scope){
	
	$scope.clock = new Date();
	
}]);