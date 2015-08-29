'use strict'

angular.module('myApp', []).run(function($rootScope) {
	$rootScope.name = new Date();
	setInterval(function(){
		$rootScope.name = new Date();
		$rootScope.$apply();
	},1000);
	
});