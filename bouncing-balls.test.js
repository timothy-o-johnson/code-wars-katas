const bouncingball = require('./bouncing-balls')

describe('validation', () => {
  test('return -1 if h less than 0', () => {
    var h = -1
    var bounce = 0.6
    var window = -2
    
    expect(bouncingball(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if h not a float', () => {
    var h = 1.0
    var bounce = 0.6
    var window = -2
    
    expect(bouncingball(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if "bounce" less than than 0', () => {
    var h = 1.2
    var bounce = -1.6
    var window = 5
    
    expect(bouncingball(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if "bounce" greater than 1', () => {
    var h = 1.2
    var bounce = 3
    var window = -2
    
    expect(bouncingball(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if "bounce" is not a float', () => {
    var h = 1.2
    var bounce = 3.5
    var window = -2
    
    expect(bouncingball(h, bounce, window)).toEqual(-1)
  })
})
