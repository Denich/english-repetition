(function () {
	'use strict';

	angular
		.module('app.core')
		.controller('NavMenuController', NavMenuController);

	/** @ngInject */
	function NavMenuController($state, navMenu) {
		var vm = this;

		vm.navigateTo = navigateTo;

		function navigateTo(state) {
			$state.go(state);
			navMenu.close();

		}
	}
})();
