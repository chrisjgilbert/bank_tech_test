describe("account", function() {

  var account;

  beforeEach(function() {
    account = new Account()
  })

  it("has a starting balance of 0", function() {
    expect(account.balance).toBe(0)
  })

  describe("deposit", function() {
    it("adds money to the balance", function() {
      account.deposit(5)
      expect(account.balance).toEqual(5)
    })
  })

})
