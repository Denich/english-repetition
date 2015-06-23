(function () {
	'use strict';

	angular
		.module('app')
		.controller('VocabularySettingsController', VocabularySettingsController);

	/** @ngInject */
	function VocabularySettingsController($location, lessons) {
		var vm = this;

		vm.start = start;

		init();

		function init() {
			lessons.get().then(function (l) {
				vm.lessons = l;
			});
		}

		function start() {
			$location.url("/vocabulary/repetition");
		}
	}
})();
