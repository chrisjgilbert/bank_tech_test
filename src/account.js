"use strict";
(function(exports) {

  function Account(history = new History, transaction = new Transaction) {
    this._balance = 0
    this.history = history
    this._transaction = transaction
  }

  Account.prototype = {
    deposit: function(amount) {
      this._balance += amount
      this.history.add(
        [
          this._transaction.showDate()
        ]
      )
    },

    withdraw: function(amount) {
      this._balance -= amount
    },

    showBalance: function() {
      return this._balance
    }
  }

  exports.Account = Account
})(this)
