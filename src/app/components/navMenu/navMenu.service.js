(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('navMenu', navMenu);

	/** @ngInject */
	function navMenu(NAV_MENU_ID, $mdSidenav) {
		var service = {
			toggle: toggle,
			close: close
		};

		function toggle() {
			_getMenuSidenav().toggle();
		}

		function close() {
			_getMenuSidenav().close();
		}

		function _getMenuSidenav() {
			return $mdSidenav(NAV_MENU_ID);
		}

		return service;
	}
})();
