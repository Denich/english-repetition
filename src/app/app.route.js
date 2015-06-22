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
			})
			.when('/vocabulary/settings', {
				templateUrl: 'app/vocabulary/settings/vocabularySettings.html',
				controller: 'VocabularySettingsController',
				controllerAs: 'settings'
			})
			.otherwise({
				redirectTo: '/'
			});
	}

})();
