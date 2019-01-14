(function(exports) {

  function DateGenerator() {}

  DateGenerator.prototype = {
    getDay: function() {
      return new Date().getDate()
    }
  }

  exports.DateGenerator = DateGenerator
})(this)
