"use strict";
describe("account", function() {

  var account;

  beforeEach(function() {
    account = new Account()
  })

  it("can be instantiated", function() {
    expect(account instanceof Account).toBeTruthy();
  })

  it("has a starting balance of 0", function() {
    expect(account.showBalance()).toEqual(0)
  })

  describe("deposit", function() {

    var dateGenerator;
    var injectedAccount;

    beforeEach(function() {
      dateGenerator = jasmine.createSpyObj('dateGenerator', {
          'getFullDate': '01/01/1998'
      });
      injectedAccount = new Account(dateGenerator)
    })

    it("adds money to the balance", function() {
      account.deposit(5)
      expect(account.showBalance()).toEqual(5)
    })

    it("has an empty history by default", function() {
      expect(injectedAccount.getHistory()).toEqual([])
    })

    it("adds date to history", function() {
      injectedAccount.deposit(10)
      expect(dateGenerator.getFullDate).toHaveBeenCalled()
    })

    it("adds deposit amount, date, empty string and balance to history", function() {
      injectedAccount.deposit(100)
      expect(injectedAccount.getHistory()).toEqual([["01/01/1998", 100, "", 100]])
    })
  })

  describe("withdraw", function() {
    it("deducts money from the balance", function() {
      account.withdraw(5)
      expect(account.showBalance()).toEqual(-5)
    })
  })

  describe("showBalance", function() {
    it("returns the current balance", function() {
      account.deposit(5)
      expect(account.showBalance()).toEqual(5)
    })
  })

})
