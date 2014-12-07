'use strict';

/**
 * @ngdoc directive
 * @name angularDemo2App.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('angularDemo2App')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
