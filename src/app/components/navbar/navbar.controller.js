(function () {
	'use strict';

	angular
		.module('app.core')
		.controller('NavbarController', NavbarController);

	/** @ngInject */
	function NavbarController(navMenu) {
		var vm = this;

		vm.toggleNavMenu = toggleNavMenu;

		function toggleNavMenu() {
			navMenu.toggle();
		}
	}
})();
