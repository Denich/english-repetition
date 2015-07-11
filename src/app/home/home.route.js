(function () {
	'use strict';

	angular
		.module('app.home')
		.config(routeConfig);

	function routeConfig($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/home/home.html',
				controller: 'HomeController',
				controllerAs: 'home'
			});

	}

})();
