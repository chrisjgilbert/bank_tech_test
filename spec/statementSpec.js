"use strict";
describe("printer", function() {

  var statement;

  beforeEach(function() {
    statement = new Statement()
  })

  it("stores the statement header", function() {
    expect(statement.showHeader()).toEqual(["DATE", "DEBIT", "CREDIT", "BALANCE"])
  })

})
