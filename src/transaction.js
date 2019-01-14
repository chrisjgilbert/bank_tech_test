(function(exports) {

  function Transaction(type) {
    this._type = type
  }

  Transaction.prototype = {
    showType: function() {
      return this._type
    }
  }

  exports.Transaction = Transaction
})(this)
