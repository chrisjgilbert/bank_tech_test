"use strict";
describe("printer", function() {

  var statement;

  beforeEach(function() {
    statement = new Statement()
  })

  it("stores the statement header", function() {
    expect(statement.showHeader()).toEqual(["DATE", "DEBIT", "CREDIT", "BALANCE"])
  })

  it("prints out the statement", function() {
    var history = [["01/01/1998", 100, "", 100]]
    spyOn(window.console, 'log');
    statement.print(history)
    expect(console.log).toHaveBeenCalled()
  })

})
