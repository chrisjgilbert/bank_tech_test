(function(exports) {

  function History() {
    this._log = []
  }

  History.prototype = {
    showLog: function() {
      return this._log
    }
  }

  exports.History = History
})(this)
