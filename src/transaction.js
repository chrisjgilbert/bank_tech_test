"use strict";
(function(exports) {

  function Transaction(amount, dateGenerator = new DateGenerator) {
    this._amount = amount
    this._dateGenerator = dateGenerator
  }

  Transaction.prototype = {
    showAmount: function() {
      return this._amount
    },

    showDate: function() {
      return this._dateGenerator.getFullDate()
    }
  }

  exports.Transaction = Transaction
})(this)
