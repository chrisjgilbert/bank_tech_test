"use strict";
(function(exports) {

  function Account(dateGenerator = new DateGenerator, statement = new Statement) {
    this._balance = 0
    this._history = []
    this._dateGenerator = dateGenerator
    this._statement = statement
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

    printStatement: function() {
      this._statement.print()
    },

    _addToHistory: function(transaction) {
      this._history.push(transaction)
    }
  }

  exports.Account = Account
})(this)
