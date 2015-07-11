(function () {
	'use strict';

	describe('NavbarController', function () {
		var vm, mockSidenav, navMenu, $controller;

		beforeEach(module('app.core'));

		beforeEach(function () {
		});

		beforeEach(inject(function (_$controller_, _navMenu_) {
			$controller = _$controller_;
			navMenu = _navMenu_;

			spyOn(navMenu, "toggle");
		}));

		function execController() {
			vm = $controller('NavbarController', {
				$mdSidenav: mockSidenav
			});
		}

		describe("On toggle nav menu", function () {
			beforeEach(function() {
				execController();
				vm.toggleNavMenu();
			});

			it("will toggle navigation menu", function () {
				expect(navMenu.toggle).toHaveBeenCalled();
			});
		});
	});
})();