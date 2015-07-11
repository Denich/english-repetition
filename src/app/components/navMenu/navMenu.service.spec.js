(function () {
	'use strict';

	describe('navMenu', function () {
		var sut, sidenavMenu;

		beforeEach(module('app.core', function ($provide) {
			sidenavMenu = jasmine.createSpyObj("sidenavMenu", ["toggle", "close"]);

			var nav_menu_id = "nav_menu_id";
			var mockSidenav = jasmine.createSpy("sidenav").and.callFake(function (id) {
				return id === nav_menu_id ? sidenavMenu : null;
			});

			$provide.value('$mdSidenav', mockSidenav);
			$provide.constant('NAV_MENU_ID', nav_menu_id);
		}));

		beforeEach(inject(function (navMenu) {
			sut = navMenu;
		}));

		describe("Toggle", function () {
			beforeEach(function () {
				sut.toggle();
			});

			it("will toggle menu side navigation", function () {
				expect(sidenavMenu.toggle).toHaveBeenCalled();
			});
		});

		describe("Close", function () {
			beforeEach(function () {
				sut.close();
			});

			it("will close menu side navigation", function () {
				expect(sidenavMenu.close).toHaveBeenCalled();
			});
		});
	});
})();