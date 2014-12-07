'use strict';

/**
 * @ngdoc service
 * @name angularDemo2App.employees
 * @description
 * # employees
 * Factory in the angularDemo2App.
 */
angular.module('angularDemo2App')
  .factory('employeeservice', function ($http) {
    // Service logic
    // ...
    var meaningOfLife = 42;
    

    function getData(callback){
    		$http.get("employee.json").success(function(data){
    			cachedData = data;
    			console.log("getting fresh  data")
    			callback(data);
    		})
    }
    
    // Public API here
    return {
      list:function(callback){
    	  $http.get("employee.json").success(callback);
      },
      list1:getData
    };
    
    
    
  });
