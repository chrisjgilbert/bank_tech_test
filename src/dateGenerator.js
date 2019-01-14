(function(exports) {

  function DateGenerator(date = new Date) {
    this.date = date
  }

  DateGenerator.prototype = {
    getDay: function() {
      return this.date.getDate()
    },

    getMonth: function() {
      return this.date.getMonth() + 1
    },

    getYear: function() {
      return this.date.getFullYear()
    },

    getFullDate: function() {
      return [
        this.getDay(),
        "/",
        this._formatMonth(),
        "/",
        this.getYear()
      ].join("")
    },

    _formatMonth: function() {
      var month = this.getMonth()
      if (month < 10) {
        return "0" + this.getMonth()
      } else {
        return this.getMonth()
      }
    }
  }

  exports.DateGenerator = DateGenerator
})(this)
