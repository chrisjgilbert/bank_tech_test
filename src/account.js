"use strict";
(function(exports) {

  function Account(dateGenerator = new DateGenerator) {
    this._balance = 0
    this.history = []
    this._dateGenerator = dateGenerator
  }

  Account.prototype = {
    deposit: function(amount) {
      this._balance += amount
      this._dateGenerator.getFullDate()
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
