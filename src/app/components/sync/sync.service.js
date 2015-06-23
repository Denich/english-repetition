(function () {
	'use strict';

	angular
		.module('app')
		.factory('syncService', syncService);

	/** @ngInject */
	function syncService(localStorageService, MOCK_LESSONS) {
		var service = {
			sync: sync
		};

		function sync() {
			//NOTE: mocking now, to be implemented
			localStorageService.set("lessons", MOCK_LESSONS);
		}

		return service;
	}
})();
