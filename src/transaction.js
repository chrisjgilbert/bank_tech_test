(function(exports) {

  function Transaction(type, amount) {
    this._type = type
    this._amount = amount
  }

  Transaction.prototype = {
    showType: function() {
      return this._type
    },

    showAmount: function() {
      return this._amount
    }
  }

  exports.Transaction = Transaction
})(this)
