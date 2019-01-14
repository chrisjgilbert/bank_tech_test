(function(exports) {

  function Account() {
    this.balance = 0;
  }

  Account.prototype = {
    deposit: function(amount) {
      this.balance += amount
    },

    withdraw: function(amount) {
      this.balance -= amount
    }
  }

  exports.Account = Account
})(this);
