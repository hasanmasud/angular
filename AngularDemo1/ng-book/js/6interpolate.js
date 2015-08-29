'use strict'
angular.module('emailParse',[])
.config(['$interpolateProvider',function($interpolateProvider){
	$interpolateProvider.startSymbol('__');
	$interpolateProvider.endSymbol('__');
}])
.factory('EmailParser',['$interpolate',function($interpolate){
	return {
		parse : function(text,context){
			var template = $interpolate(text);
			return template(context);
		}
	};
}]);

angular.module('myApp',['emailParse'])
	.controller('MyController',['EmailParser','$scope',function(EmailParser,$scope){
	
		$scope.to = 'ari@fullstack.io';
        $scope.emailBody = 'Hello __to__';
        
	$scope.$watch('emailBody',function(body){
		
		if (body) {
			$scope.previewText = EmailParser.parse(body, {
				to: $scope.to
			});
		}
		
	});
	
	
}]);