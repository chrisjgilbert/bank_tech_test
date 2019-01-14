"use strict";
describe("account", function() {

  var account;
  var dateGenerator;
  var injectedAccount;
  var statement;

  beforeEach(function() {
    dateGenerator = jasmine.createSpyObj('dateGenerator', {
        'getFullDate': '01/01/1998'
    });
    statement = jasmine.createSpyObj('statement', ['print']);
    injectedAccount = new Account(dateGenerator, statement)
    account = new Account()
  })

  it("can be instantiated", function() {
    expect(account instanceof Account).toBeTruthy();
  })

  it("has a starting balance of 0", function() {
    expect(account._balance).toEqual(0)
  })

  describe("deposit", function() {

    it("adds money to the balance", function() {
      account.deposit(5)
      expect(account._balance).toEqual(5)
    })

    it("has an empty history by default", function() {
      expect(injectedAccount._history).toEqual([])
    })

    it("adds date to history", function() {
      injectedAccount.deposit(10)
      expect(dateGenerator.getFullDate).toHaveBeenCalled()
    })

    it("adds deposit amount, date, empty string and balance to history", function() {
      injectedAccount.deposit(100)
      expect(injectedAccount._history).toEqual([["01/01/1998", 100, "", 100]])
    })
  })

  describe("withdraw", function() {
    it("deducts money from the balance", function() {
      account.deposit(50)
      account.withdraw(5)
      expect(account._balance).toEqual(45)
    })

    it("adds withdraw amount, date, empty string and balance to history", function() {
      injectedAccount.withdraw(0)
      expect(injectedAccount._history).toEqual([["01/01/1998", "",  0, 0]])
    })

    it("wont let your balance go below 0", function() {
      expect(function(){ injectedAccount.withdraw(10);}).toThrowError('You dont have enough money in your account!');
    })
  })

  describe("showBalance", function() {
    it("returns the current balance", function() {
      account.deposit(5)
      expect(account._balance).toEqual(5)
    })
  })

  describe("printStatement", function() {
    it("tells the statement to print", function() {
      injectedAccount.printStatement()
      expect(statement.print).toHaveBeenCalledWith(injectedAccount._history)
    })
  })

})
