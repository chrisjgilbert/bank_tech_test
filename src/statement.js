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
    }
  }

  exports.Statement = Statement
})(this)
