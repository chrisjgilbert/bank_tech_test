"use strict";
describe("dateGenerator", function() {

  var dateGenerator;

  var date = jasmine.createSpyObj('date', {
    'getDate': 14,
    'getMonth': 0,
    'getFullYear': 2019
  });

  beforeEach(function() {
    dateGenerator = new DateGenerator(date)
  })

  describe("_getDay", function() {
    it("calls on Date to return the day as an integer", function() {
      dateGenerator._getDay()
      expect(date.getDate).toHaveBeenCalled()
    })

    it("returns the current day", function() {
      expect(dateGenerator._getDay()).toEqual(14)
    })
  })

  describe("_getMonth", function() {
    it("calls on Date to return the year as an integer", function() {
      dateGenerator._getMonth()
      expect(date.getMonth).toHaveBeenCalled()
    })

    it("returns the current month + 1", function() {
      expect(dateGenerator._getMonth()).toEqual(1)
    })
  })

  describe("_getYear", function() {
    it("calls on Date to return the year as an integer", function() {
      dateGenerator._getYear()
      expect(date.getFullYear).toHaveBeenCalled()
    })

    it("returns the current year", function() {
      expect(dateGenerator._getYear()).toEqual(2019)
    })
  })

  describe("getFullDate", function() {
    it("returns full date", function() {
      expect(dateGenerator.getFullDate()).toEqual("14/01/2019")
    })
  })

})
