(function () {
	'use strict';

	angular
		.module('app.vocabulary')
		.controller('VocabularySettingsController', VocabularySettingsController);

	/** @ngInject */
	function VocabularySettingsController($state, lessons) {
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
			$state.go('vocabulary-repetition', {lesson: vm.lesson.code});
		}
	}
})();
