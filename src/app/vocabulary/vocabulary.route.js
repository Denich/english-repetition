(function () {
	'use strict';

	//TODO: Vocabulary module
	angular
		.module('app')
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
