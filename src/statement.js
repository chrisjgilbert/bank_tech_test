(function(exports) {

  function Statement() {
    this._header = [
      "DATE",
      "DEBIT",
      "CREDIT",
      "BALANCE"
    ]
  }

  Statement.prototype = {
    print: function(history) {
      console.log(this._header.join(" || "))
      history.forEach(function(transaction) {
        console.log(transaction.join(" || "))
      })
    }
  } 

  exports.Statement = Statement
})(this)
