"use strict";
describe("transaction", function() {

  it("can be instantiated", function() {
    var transaction = new Transaction()
    expect(transaction instanceof Transaction).toBeTruthy()
  })

  it("has a type", function() {
    var debit = new Transaction("debit")
    expect(debit.showType()).toEqual("debit")
  })

  it("has an amount", function() {
    var credit = new Transaction("credit", 10)
    expect(credit.showAmount()).toEqual(10)
  })

})
