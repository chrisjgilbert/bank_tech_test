"use strict";
(function(exports) {

  function Account(transaction = Transaction) {
    this._balance = 0
    this._Transaction = transaction
  }

  Account.prototype = {
    deposit: function(amount) {
      this._balance += amount
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
