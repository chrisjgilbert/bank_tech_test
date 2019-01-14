"use strict";
describe("printer", function() {

  var statement;

  beforeEach(function() {
    statement = new Statement()
  })

  it("stores the statement header", function() {
    expect(statement.showHeader()).toEqual(["DATE", "DEBIT", "CREDIT", "BALANCE"])
  })

  it("pretty prints out the statement", function() {
    var log = [["14/01/2019", "0", "10", "0"]]
    expect(statement.print(log)).toEqual(
      "01/08/1988 || 10 || || 10"
    )
  })

})
