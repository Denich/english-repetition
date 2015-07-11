(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController(syncService) {
        var vm = this;

        vm.sync = sync;

        function sync() {
            syncService.sync();
        }
    }
})();
