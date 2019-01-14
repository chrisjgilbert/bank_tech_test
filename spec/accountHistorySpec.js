describe("accountHistory", function() {

  var accountHistory;

  beforeEach(function() {
    accountHistory = new AccountHistory()
  })

  it("can be instantiated", function() {
    expect(accountHistory instanceof AccountHistory).toBeTruthy();
  })

  it("has an empty log by default", function() {
    expect(accountHistory.showLog()).toEqual([])
  })

})
