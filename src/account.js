"use strict";
(function(exports) {

  function Account(dateGenerator = new DateGenerator) {
    this._balance = 0
    this._history = []
    this._dateGenerator = dateGenerator
  }

  Account.prototype = {
    deposit: function(amount) {
      this._balance += amount
      this._addToHistory(
        [
          this._dateGenerator.getFullDate(),
          amount,
          "",
          this._balance
        ]
      )
    },

    withdraw: function(amount) {
      this._balance -= amount
      this._addToHistory(
        [
          this._dateGenerator.getFullDate(),
          "",
          amount,
          this._balance
        ]
      )
    },

    showBalance: function() {
      return this._balance
    },

    getHistory: function() {
      return this._history
    },

    _addToHistory: function(transaction) {
      this._history.push(transaction)
    }
  }

  exports.Account = Account
})(this)
