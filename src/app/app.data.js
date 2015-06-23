(function () {
	'use strict';

	//NOTE: For testing purposes
	angular
		.module('app')
		.constant('MOCK_LESSONS', [
			{
				name: "Lesson 1",
				index: 1,
				code: "l1"
			},
			{
				name: "Lesson 2",
				index: 2,
				code: "l2"
			},
			{
				name: "Lesson 3",
				index: 3,
				code: "l3"
			}
		]);

})();
