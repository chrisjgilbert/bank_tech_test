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
      this._addToHistory(this._addCreditTransaction(amount))
    },

    withdraw: function(amount) {
      if (this._balance - amount >= 0) {
        this._balance -= amount
        this._addToHistory(this._addDebitTransaction(amount))
      } else {
        throw new Error('You dont have enough money in your account!')
      }
    },

    printStatement: function() {
      this._statement.print(this._history)
    },

    _addToHistory: function(transaction) {
      this._history.push(transaction)
    },

    _addDebitTransaction: function(amount) {
      return [
        this._dateGenerator.getFullDate(),
        "",
        amount,
        this._balance
      ]
    },

    _addCreditTransaction: function(amount) {
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
