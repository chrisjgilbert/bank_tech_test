"use strict";
(function(exports) {

  function Transaction(type, amount, dateGenerator = new DateGenerator) {
    this._type = type
    this._amount = amount
    this._dateGenerator = dateGenerator
  }

  Transaction.prototype = {
    showType: function() {
      return this._type
    },

    showAmount: function() {
      return this._amount
    },

    showDate: function() {
      return this._dateGenerator.getFullDate()
    }
  }

  exports.Transaction = Transaction
})(this)
