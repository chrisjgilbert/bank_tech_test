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
    }
  }

  exports.DateGenerator = DateGenerator
})(this)
