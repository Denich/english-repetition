(function() {
  'use strict';

  angular
    .module('englishRepetition')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
