(function () {
	'use strict';

	angular
		.module('app')
		.controller('NavbarController', NavbarController);

	/** @ngInject */
	function NavbarController(NAV_MENU_ID, $mdSidenav) {
		var vm = this;

		vm.toggleNavMenu = toggleNavMenu;

		function toggleNavMenu() {
			$mdSidenav(NAV_MENU_ID).toggle();
		}
	}
})();
