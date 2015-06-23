(function () {
    'use strict';

    angular
        .module('app')
        .controller('WelcomeController', WelcomeController);

    /** @ngInject */
    function WelcomeController(syncService) {
        var vm = this;

        vm.sync = sync;

        function sync() {
            syncService.sync();
        }
    }
})();
