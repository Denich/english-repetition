(function () {
	'use strict';

	describe('NavbarController', function () {
		var vm, mockSidenav, sidenav, $controller, nav_menu_id;

		beforeEach(module('app'));

		beforeEach(function () {
			sidenav = jasmine.createSpyObj("sidenav", ["toggle"]);
			mockSidenav = jasmine.createSpy("sideNav").and.returnValue(sidenav)
		});

		beforeEach(inject(function(_$controller_, NAV_MENU_ID) {
			$controller = _$controller_;
			nav_menu_id = NAV_MENU_ID
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

			it("will toggle navigation side menu", function () {
				expect(mockSidenav).toHaveBeenCalledWith(nav_menu_id);
				expect(sidenav.toggle).toHaveBeenCalled();
			});
		});
	});
})();