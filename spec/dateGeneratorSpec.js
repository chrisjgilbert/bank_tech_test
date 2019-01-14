describe("dateGenerator", function() {

  var dateGenerator;

  beforeEach(function() {
    dateGenerator = new DateGenerator
  })

  it("returns the current day", function() {
    expect(dateGenerator.getDay()).toEqual(14)
  })

  it("returns the current month", function() {
    expect(dateGenerator.getMonth()).toEqual(1)
  })

})
