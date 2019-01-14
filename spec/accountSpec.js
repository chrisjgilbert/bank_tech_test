describe("account", function() {

  var account;

  beforeEach(function() {
    account = new Account()
  })

  it("has a starting balance of 0", function() {
    expect(account.balance).toEqual(0)
  })

  describe("deposit", function() {
    it("adds money to the balance", function() {
      account.deposit(5)
      expect(account.balance).toEqual(5)
    })
  })

  describe("withdraw", function() {
    it("deducts money from the balance", function() {
      account.withdraw(5)
      expect(account.balance).toEqual(-5)
    })
  })

  describe("showBalance", function() {
    it("returns the current balance", function() {
      account.deposit(5)
      expect(account.showBalance()).toEqual(5)
    })
  })

})
