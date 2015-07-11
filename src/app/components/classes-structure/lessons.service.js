(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('lessons', lessons);

	/** @ngInject */
	function lessons(localStorageService, $q) {
		var service = {
			get: get
		};

		function get() {
			return $q.when(_getLocalStorageLessons());
		}

		function _getLocalStorageLessons() {
			return localStorageService.get("lessons") || [];
		}

		return service;
	}
})();
