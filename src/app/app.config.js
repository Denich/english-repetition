(function () {
	'use strict';

	angular
		.module('app')
		.config(config);

	/** @ngInject */
	function config(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix("aec");
	}

})();
