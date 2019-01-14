"use strict";
(function(exports) {

  function Account(history = new History, dateGenerator = new DateGenerator) {
    this._balance = 0
    this.history = history
    this._dateGenerator = dateGenerator
  }

  Account.prototype = {
    deposit: function(amount) {
      this._balance += amount
      this.history.add(
        this._dateGenerator.getFullDate()
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
