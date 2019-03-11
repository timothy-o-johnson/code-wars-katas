import {haveExactChange} from './Vasya-Clerk'

describe('haveExactChange', () => {
  // mockup of item objects

  test('Should return true if all customers have exact change', () => {
    var peopleInLine = [25]
    expect(haveExactChange(peopleInLine)).toEqual(true)
  })
  test('Should return 0 if there are no transactions', () => {
    var itemObjs = []
    expect(ReturnAuthVerify.getTransactionsTotal(itemObjs)).toEqual(0)
  })
})

