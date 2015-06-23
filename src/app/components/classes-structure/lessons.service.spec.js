(function () {
	'use strict';

	describe('lessons', function () {
		var sut, localStorageService, $rootScope;

		beforeEach(module('app', function () {

		}));

		beforeEach(inject(function (lessons, _localStorageService_, _$rootScope_) {
			sut = lessons;
			localStorageService = _localStorageService_;
			$rootScope = _$rootScope_;
		}));

		describe("Get", function () {
			var localStorageLessons;

			beforeEach(function () {
				spyOn(localStorageService, 'get').and.callFake(function (key) {
					return key === "lessons" ? localStorageLessons : null;
				});
			});

			it("will return lessons from local storage", function () {
				localStorageLessons = ["lessons1", "lesson2"];
				sut.get().then(function (res) {
					expect(res).toBe(localStorageLessons);
				});
				$rootScope.$digest();
			});

			it("will return empty array if there is no lessons", function () {
				localStorageLessons = null;
				sut.get().then(function (res) {
					expect(res).toEqual([]);
				});
				$rootScope.$digest();
			});
		});
	});
})();