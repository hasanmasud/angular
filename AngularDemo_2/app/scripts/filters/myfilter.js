'use strict';

/**
 * @ngdoc filter
 * @name angularDemo2App.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularDemo2App.
 */
angular.module('angularDemo2App')
  .filter('myFilter', function () {
    return function (input) {
    	//console.log(input);
      return 'Hello  :' + input;
    };
  });
