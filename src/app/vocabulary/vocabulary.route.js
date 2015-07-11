(function () {
	'use strict';

	angular
		.module('app.vocabulary')
		.config(routeConfig);

	function routeConfig($stateProvider) {
		$stateProvider
			.state('vocabulary-settings', {
				url: '/vocabulary/settings',
				templateUrl: 'app/vocabulary/settings/vocabularySettings.html',
				controller: 'VocabularySettingsController',
				controllerAs: 'settings'
			})
			.state('vocabulary-repetition', {
				url: '/vocabulary/repetition/{lesson}',
				templateUrl: 'app/vocabulary/repetition/vocabularyRepetition.html',
				controller: 'VocabularyRepetitionController',
				controllerAs: 'repetition'
			});

	}

})();
