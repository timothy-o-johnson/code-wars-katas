const bouncingball = require('./bouncing-balls')

describe('validation', () => {
  test('h must be greater than 0', () => {
    var h = -1
    var bounce = 0.6
    var window = -2
    
    expect(bouncingball(h, bounce, window)).toEqual(-1)
  })
})
