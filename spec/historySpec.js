"use strict";
describe("accountHistory", function() {

  var history;

  beforeEach(function() {
    history = new History()
  })

  it("can be instantiated", function() {
    expect(history instanceof History).toBeTruthy();
  })

  it("has an empty log by default", function() {
    expect(history.showLog()).toEqual([])
  })

  it("adds a transaction to the log", function() {
    var transaction = ["01/10/2018", "", "500", "1000"]
    history.add(transaction)
    expect(history.log).toContaine(transaction)
  })

})
