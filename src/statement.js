(function(exports) {

  function Statement() {
    this._header = [
      "DATE",
      "DEBIT",
      "CREDIT",
      "BALANCE"
    ]
  }

  Statement.prototype = {
    showHeader: function() {
      return this._header;
    },

    print: function(log) {
      return log.flat(1).join(" || ")
    }
  }

  exports.Statement = Statement
})(this)
