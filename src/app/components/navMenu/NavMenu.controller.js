(function () {
	'use strict';

	angular
		.module('app')
		.controller('NavMenuController', NavMenuController);

	/** @ngInject */
	function NavMenuController($location, navMenu) {
		var vm = this;

		vm.navigateTo = navigateTo;

		function navigateTo(url) {
			$location.url(url);
			navMenu.close();
		}
	}
})();
