const lastNumberAndSteps = require('./a-rule-of-divisibility-by-7')

describe('lastNumberAndSteps', () => {

  test('477557101 should return [28, 7] ', () => {
    var expected = [28, 7]
    expect(lastNumberAndSteps(477557101, 0)).toEqual(expect.arrayContaining(expected))
  })

  test('483 should return [42, 1] ', () => {
    var expected = [42, 1]
    expect(lastNumberAndSteps(42, 0)).toEqual(expect.arrayContaining(expected))
  })

  test('0 should return [0, 1] ', () => {
    var expected = [0, 1]
    expect(lastNumberAndSteps(0, 0)).toEqual(expect.arrayContaining(expected))
  })

  test('7 should return [7, 1] ', () => {
    var expected = [7, 1]
    expect(lastNumberAndSteps(7, 0)).toEqual(expect.arrayContaining(expected))
  })

  test('1603 should return [7, 2] ', () => {
    var expected = [7, 2]
    expect(lastNumberAndSteps(1603, 0)).toEqual(expect.arrayContaining(expected))
  })

})
