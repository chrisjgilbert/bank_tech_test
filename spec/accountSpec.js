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

    var history;
    var injectedAccount;

    beforeEach(function() {
      history = jasmine.createSpyObj('history', ['add'])
      injectedAccount = new Account(history)
    })

    it("adds money to the balance", function() {
      account.deposit(5)
      expect(account.showBalance()).toEqual(5)
    })

    it("adds deposit to history", function() {
      injectedAccount.deposit(5)
      expect(history.add).toHaveBeenCalled()
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
