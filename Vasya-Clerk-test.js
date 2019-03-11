require()

describe('haveExactChange', () => {
  // mockup of item objects

  test('Should return total amounts of all transactions inputted', () => {
    var itemObjs = [
      {
        total: {
          value: 20.0
        }
      },
      {
        total: {
          value: -30.0
        }
      }
    ]
    expect(ReturnAuthVerify.getTransactionsTotal(itemObjs)).toEqual(-10.0)
  })
  test('Should return 0 if there are no transactions', () => {
    var itemObjs = []
    expect(ReturnAuthVerify.getTransactionsTotal(itemObjs)).toEqual(0)
  })
})

