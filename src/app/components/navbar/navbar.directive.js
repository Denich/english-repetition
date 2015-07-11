(function() {
  'use strict';

  angular
      .module('app.core')
    .directive('aecNavbar', Navbar);

  /** @ngInject */
  function Navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'NavbarController',
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;
  }

})();
