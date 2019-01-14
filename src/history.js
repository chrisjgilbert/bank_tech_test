"use strict";
(function(exports) {

  function History() {
    this._log = []
  }

  History.prototype = {
    showLog: function() {
      return this._log
    },

    add: function(transaction) {
      this._log.push(transaction)
    }
  }

  exports.History = History
})(this)
