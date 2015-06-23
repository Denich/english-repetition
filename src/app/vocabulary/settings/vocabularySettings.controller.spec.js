(function () {
	'use strict';

	describe('VocabularySettingsController', function () {
		var vm, $controller, storedLessons, $rootScope;

		beforeEach(function () {
			module('app');
		});

		beforeEach(inject(function (_$controller_, _$rootScope_, $q, lessons) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;

			storedLessons = ["storedLesson1", "storedLesson2"];
			spyOn(lessons, 'get').and.callFake(function () {
				return $q.when(storedLessons);
			});
		}));

		function execController() {
			vm = $controller('VocabularySettingsController', {});
		}

		describe("On load", function () {
			beforeEach(function () {
				execController();
			});

			it("will show lessons", function () {
				$rootScope.$digest();
				expect(vm.lessons).toBe(storedLessons);
			});
		});
	});
})();