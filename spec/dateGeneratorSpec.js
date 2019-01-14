"use strict";
describe("dateGenerator", function() {

  var dateGenerator;

  beforeEach(function() {
    dateGenerator = new DateGenerator
  })

  it("returns the current day", function() {
    spyOn(dateGenerator._date, "getDate").and.returnValue(14);
    expect(dateGenerator._getDay()).toEqual(14)
  })

  it("returns the current month + 1", function() {
    spyOn(dateGenerator._date, "getMonth").and.returnValue(1);
    expect(dateGenerator._getMonth()).toEqual(2)
  })

  it("returns the current year", function() {
    spyOn(dateGenerator._date, "getFullYear").and.returnValue(2019);
    expect(dateGenerator._getYear()).toEqual(2019)
  })

  it("returns full date", function() {
    spyOn(dateGenerator._date, "getDate").and.returnValue(14);
    spyOn(dateGenerator._date, "getMonth").and.returnValue(0);
    spyOn(dateGenerator._date, "getFullYear").and.returnValue(2019);
    expect(dateGenerator.getFullDate()).toEqual("14/01/2019")
  })

})
