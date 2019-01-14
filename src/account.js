(function(exports) {

  function Account() {
    this._balance = 0
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
