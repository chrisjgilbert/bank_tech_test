describe("dateGenerator", function() {

  var dateGenerator;

  beforeEach(function() {
    dateGenerator = new DateGenerator
  })

  it("returns the current day", function() {
    expect(dateGenerator.getDay()).toEqual(14)
  })

})
