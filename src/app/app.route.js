(function () {
	'use strict';

	angular
		.module('app')
		.config(routeConfig);

	function routeConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
	}

})();
