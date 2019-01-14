(function(exports) {

  function AccountHistory() {
    this._log = []
  }

  AccountHistory.prototype = {
    showLog: function() {
      return this._log
    }
  }

  exports.AccountHistory = AccountHistory
})(this)
