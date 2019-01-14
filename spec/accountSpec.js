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
    it("adds money to the balance", function() {
      account.deposit(5)
      expect(account.showBalance()).toEqual(5)
    })

    it("adds a transaction to the account history", function() {
      var history = jasmine.createSpyObj('history',['add']);
      var accountWithHistory = new Account(history)
      accountWithHistory.deposit(5)
      expect(history.add).toHaveBeenCalled()
    })

    it("adds the transaction date to the account history", function() {
      var history = jasmine.createSpyObj('history',['add']);
      var transaction = jasmine.createSpyObj('transaction', ['getDate', 'showAmount', 'showType'])
      var accountWithHistory = new Account(history, transaction)
      account.deposit(5)
      expect(transaction.getDate).toHaveBeenCalled()
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
