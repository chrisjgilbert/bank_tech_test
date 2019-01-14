describe("transaction", function() {

  var transaction;

  beforeEach(function() {
    transaction = new Transaction()
  })

  it("can be instantiated", function() {
    expect(transaction instanceof Transaction).toBeTruthy()
  })

  it("has a type", function() {
    debit = new Transaction("debit")
    expect(debit.showType()).toEqual("debit")
  })

  it("has an amount", function() {
    credit = new Transaction("credit", 10)
    expect(credit.showAmount()).toEqual(10)
  })

})
