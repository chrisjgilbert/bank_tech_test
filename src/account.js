"use strict";
(function(exports) {

  function Account(history = new History) {
    this._balance = 0
    this.history = history
  }

  Account.prototype = {
    deposit: function(amount) {
      this._balance += amount
      this.history.add()
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
