(function () {
	'use strict';

	angular
		.module('app.core')
		.directive('aecNavMenu', NavMenu);

	/** @ngInject */
	function NavMenu() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navMenu/navMenu.html',
			controller: 'NavMenuController',
			controllerAs: 'menu',
			bindToController: true
		};

		return directive;
	}

})();
