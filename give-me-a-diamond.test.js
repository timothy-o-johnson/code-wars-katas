const diamond = require('./give-me-a-diamond')
//const isFloat = require('./bouncing-balls')

describe('diamond()', () => {
  test('diamond(3)', () => {    
    expect(diamond.diamond(3)).toEqual(" *\n***\n *\n")
  })

  test('if n is even, 0, or negative return null', () => {    
    expect(diamond.diamond(3)).toEqual(" *\n***\n *\n")
  })

})
