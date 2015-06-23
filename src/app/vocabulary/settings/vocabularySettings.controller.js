(function () {
	'use strict';

	angular
		.module('app')
		.controller('VocabularySettingsController', VocabularySettingsController);

	/** @ngInject */
	function VocabularySettingsController($location) {
		var vm = this;

		vm.start = start;

		function start() {
			$location.url("/vocabulary/repetition");
		}
	}
})();
