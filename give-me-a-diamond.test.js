const diamond = require('./give-me-a-diamond')

describe('diamond()', () => {
  test('diamond(3)', () => {
    expect(diamond.diamond(3)).toEqual(' *\n***\n *\n')
  })

  test('if n is even return null', () => {
    expect(diamond.diamond(4)).toEqual(null)
  })

  test('if n is 0 return null', () => {
    expect(diamond.diamond(0)).toEqual(null)
  })

  test('if n is negative return null', () => {
    expect(diamond.diamond(-7)).toEqual(null)
  })
})
