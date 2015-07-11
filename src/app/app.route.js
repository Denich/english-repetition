(function () {
	'use strict';

	angular
		.module('app')
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/welcome/welcome.html',
				controller: 'WelcomeController',
				controllerAs: 'welcome'
			});
	}

})();
