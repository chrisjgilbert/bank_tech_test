"use strict";
describe("transaction", function() {

  it("can be instantiated", function() {
    var transaction = new Transaction()
    expect(transaction instanceof Transaction).toBeTruthy()
  })

  it("has an amount", function() {
    var credit = new Transaction(10)
    expect(credit.showAmount()).toEqual(10)
  })

  describe("showDate", function() {

    var transaction;
    var dateGenerator = jasmine.createSpyObj('dateGenerator', {
      "getFullDate": "14/01/2019"
    });

    beforeEach(function() {
      transaction = new Transaction(5, dateGenerator)
    })

    it("returns the date of transaction", function() {
      expect(transaction.showDate()).toEqual("14/01/2019")
    })

    it("calls on the injected dateGenerator to return the date", function() {
      transaction.showDate()
      expect(dateGenerator.getFullDate).toHaveBeenCalled()
    })
  })

})
