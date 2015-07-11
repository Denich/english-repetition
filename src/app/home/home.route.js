(function () {
	'use strict';

	angular
		.module('app.home')
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeController',
				controllerAs: 'home'
			});

	}

})();
