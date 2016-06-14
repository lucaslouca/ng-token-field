angular.module('MyApp', ['ngTokenField']).controller('AppCtrl', function($scope, AuthService, AUTH_EVENTS) {
	$scope.validator = function(text) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(text);
    };
	
	$scope.tags = [];
});
