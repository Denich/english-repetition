(function () {
	'use strict';

	angular
		.module('app')
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
