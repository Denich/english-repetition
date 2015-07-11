(function () {
	'use strict';

	describe('NavMenuController', function () {
		var vm, $controller, $state, navMenu;

		beforeEach(function () {
			module('app.core');
		});

		beforeEach(inject(function (_$controller_, _$state_, _navMenu_) {
			$controller = _$controller_;
			$state = _$state_;
			spyOn($state, "go");

			navMenu = _navMenu_;
			spyOn(navMenu, "close");
		}));

		function execController() {
			vm = $controller('NavMenuController', {});
		}

		describe("Navigate to", function () {
			var state;

			beforeEach(function () {
				execController();
				state = "state";
				vm.navigateTo(state);
			});

			it("will change state to provided", function () {
				expect($state.go).toHaveBeenCalledWith(state);
			});

			it("will close navigation menu", function () {
				expect(navMenu.close).toHaveBeenCalled();
			});
		});
	});
})();