const gap = require('./gap-in-primes')

describe('gap()', () => {
  test('gap(2, 100, 110) should return [101,103]', () => {
    expect(gap.gap(2, 100, 110)).toEqual(expect.arrayContaining([101, 103]))
  })

  test('gap(4, 100, 110) should return [103,107]', () => {
    expect(gap.gap(4, 100, 110)).toEqual(expect.arrayContaining([103, 107]))
  })

  test('gap(6, 100, 110) should return null', () => {
    expect(gap.gap(6, 100, 110)).toEqual(null)
  })
})

describe('isPrime()', () => {
  test('7 should return true', () => {
    expect(gap.isPrime(7, 2)).toEqual(true)
  })

  test('200 should return false', () => {
    expect(gap.isPrime(200, 2)).toEqual(false)
  })

  test('231 should return false', () => {
    expect(gap.isPrime(231, 2)).toEqual(false)
  })

  test('101 should return false', () => {
    expect(gap.isPrime(101, 2)).toEqual(true)
  })
})
