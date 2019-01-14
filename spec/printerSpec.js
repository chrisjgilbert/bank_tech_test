"use strict";
describe("printer", function() {

  var printer;

  beforeEach(function() {
    printer = new Printer()
  })

  it("stores the statement header", function() {
    expect(printer.showHeader()).toEqual(["DATE", "DEBIT", "CREDIT", "BALANCE"])
  })

})
