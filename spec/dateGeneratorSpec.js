describe("dateGenerator", function() {

  var dateGenerator;

  beforeEach(function() {
    dateGenerator = new DateGenerator
  })

  it("returns the current day", function() {
    expect(dateGenerator._getDay()).toEqual(14)
  })

  it("returns the current month", function() {
    expect(dateGenerator._getMonth()).toEqual(1)
  })

  it("returns the current year", function() {
    expect(dateGenerator._getYear()).toEqual(2019)
  })

  it("returns full date", function() {
    expect(dateGenerator.getFullDate()).toEqual("14/01/2019")
  })

})
