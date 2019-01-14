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
      this._addToHistory(this._formatCreditTransaction(amount))
    },

    withdraw: function(amount) {
      this._balance -= amount
      this._addToHistory(this._formatDebitTransaction(amount))
    },

    printStatement: function() {
      this._statement.print(this._history)
    },

    _addToHistory: function(transaction) {
      this._history.push(transaction)
    },

    _formatDebitTransaction: function(amount) {
      return [
        this._dateGenerator.getFullDate(),
        "",
        amount,
        this._balance
      ]
    },

    _formatCreditTransaction: function(amount) {
      return [
        this._dateGenerator.getFullDate(),
        amount,
        "",
        this._balance
      ]
    }
  }

  exports.Account = Account
})(this)
