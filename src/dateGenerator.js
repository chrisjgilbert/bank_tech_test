"use strict";
(function(exports) {

  function DateGenerator(date = new Date) {
    this._date = date
  }

  DateGenerator.prototype = {
    _getDay: function() {
      return this._date.getDate()
    },

    _getMonth: function() {
      return this._date.getMonth() + 1
    },

    _getYear: function() {
      return this._date.getFullYear()
    },

    _formatMonth: function() {
      var month = this._getMonth()
      if (month < 10) {
        return "0" + this._getMonth()
      } else {
        return this._getMonth()
      }
    },

    getFullDate: function() {
      return [
        this._getDay(),
        "/",
        this._formatMonth(),
        "/",
        this._getYear()
      ].join("")
    }
  }

  exports.DateGenerator = DateGenerator
})(this)
