(function () {
	'use strict';

	describe('VocabularySettingsController', function () {
		var vm, $controller, storedLessons, $rootScope;

		beforeEach(function () {
			module('app.vocabulary');
		});

		beforeEach(inject(function (_$controller_, _$rootScope_, $q, lessons, $state) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;

			spyOn($state, "go");
			this.$state = $state;

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

		describe("On start", function () {
			beforeEach(function () {
				execController();
				this.selectedLessonCode = "selectedLessonCode";
				vm.lesson = {
					code: this.selectedLessonCode
				};
				vm.start();
			});

			it("will show lesson repetition for selected lesson", function () {
				expect(this.$state.go).toHaveBeenCalledWith('vocabulary-repetition', {lesson: this.selectedLessonCode});
			});
		});
	});
})();