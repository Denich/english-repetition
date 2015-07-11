(function () {
	'use strict';

	describe('NavMenuController', function () {
		var vm, $controller, $location, navMenu;

		beforeEach(function () {
			module('app.core');
		});

		beforeEach(inject(function (_$controller_, _$location_, _navMenu_) {
			$controller = _$controller_;
			$location = _$location_;
			spyOn($location, "url");

			navMenu = _navMenu_;
			spyOn(navMenu, "close");
		}));

		function execController() {
			vm = $controller('NavMenuController', {});
		}

		describe("Navigate to", function () {
			var url;

			beforeEach(function () {
				execController();
				url = "url";
				vm.navigateTo(url);
			});

			it("will change url to provided", function () {
				expect($location.url).toHaveBeenCalledWith(url);
			});

			it("will close navigation menu", function () {
				expect(navMenu.close).toHaveBeenCalled();
			});
		});
	});
})();