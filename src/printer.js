(function(exports) {

  function Printer() {
    this._header = [
      "DATE",
      "DEBIT",
      "CREDIT",
      "BALANCE"
    ]
  }

  Printer.prototype = {
    showHeader: function() {
      return this._header;
    }
  }

  exports.Printer = Printer
})(this)
