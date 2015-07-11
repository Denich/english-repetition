(function () {
	'use strict';

	angular
		.module('app.vocabulary')
		.controller('VocabularySettingsController', VocabularySettingsController);

	/** @ngInject */
	function VocabularySettingsController($location, lessons, REPETITION_URL) {
		var vm = this;

		vm.start = start;

		init();

		function init() {
			lessons.get()
				.then(showLessons);
		}

		function showLessons(l) {
			vm.lessons = l;
		}

		function start() {
			$location.url(REPETITION_URL + "/" + vm.lesson.code);
		}
	}
})();
