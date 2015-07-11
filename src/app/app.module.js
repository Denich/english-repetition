(function () {
	'use strict';

	//TODO: decouple modules definitions
	angular.module('app.core', ['ngMaterial', 'LocalStorageModule']);
	angular.module('app.vocabulary', ['ngRoute', 'ngMaterial', 'LocalStorageModule', 'app.core']);
	angular.module('app', ['ngAnimate', 'ngTouch', 'restangular', 'ngRoute', 'ngMaterial', 'LocalStorageModule', 'app.vocabulary', 'app.core']);

})();
