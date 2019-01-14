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

})
