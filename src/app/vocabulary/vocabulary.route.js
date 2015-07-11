(function () {
	'use strict';

	angular
		.module('app.vocabulary')
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/vocabulary/settings', {
				templateUrl: 'app/vocabulary/settings/vocabularySettings.html',
				controller: 'VocabularySettingsController',
				controllerAs: 'settings'
			})
			.when('/vocabulary/repetition/:lesson', {
				templateUrl: 'app/vocabulary/repetition/vocabularyRepetition.html',
				controller: 'VocabularyRepetitionController',
				controllerAs: 'repetition'
			});

	}

})();
