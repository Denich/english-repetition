(function () {
	'use strict';

	describe('VocabularySettingsController', function () {
		var vm, $controller;

		beforeEach(function () {
			module('app');
		});

		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_;
		}));

		function execController() {
			vm = $controller('VocabularySettingsController', {});
		}


	});
})();