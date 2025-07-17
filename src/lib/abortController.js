'use strict';
import AbortController from 'abort-controller';

var abortController = (function() {
  // Instance stores a reference to the Singleton
  var controller;

  function init() {
    // Singleton
    return new AbortController();
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!controller) {
        controller = init();
      }

      return controller;
    },
  };
})();

export default abortController;
