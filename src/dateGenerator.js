(function(exports) {

  function DateGenerator(date = new Date) {
    this.date = date
  }

  DateGenerator.prototype = {
    getDay: function() {
      return this.date.getDate()
    }
  }

  exports.DateGenerator = DateGenerator
})(this)
