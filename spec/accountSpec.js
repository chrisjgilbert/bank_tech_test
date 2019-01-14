describe("account", function() {

  var account;

  it("has a starting balance of 0", function() {
    account = new Account()
    expect(account.balance).toBe(0)
  })

})
