const bouncingball = require('./bouncing-balls')
//const isFloat = require('./bouncing-balls')

describe('validation', () => {
  test('return -1 if h less than 0', () => {
    var h = -1
    var bounce = 0.6
    var window = -2
    
    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(-1)
  })

  xtest('return -1 if h not a float', () => {
    var h = 1.0
    var bounce = 0.6
    var window = -2
    
    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if "bounce" less than than 0', () => {
    var h = 1.2
    var bounce = -1.6
    var window = 5
    
    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if "bounce" greater than 1', () => {
    var h = 1.2
    var bounce = 3
    var window = -2
    
    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(-1)
  })

  xtest('return -1 if "bounce" is not a float', () => {
    var h = 1.2
    var bounce = 3.5
    var window = -2
    
    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(-1)
  })

  test('return -1 if "window" is greater than "h" ', () => {
    var h = 1.2
    var bounce = 0.6
    var window = 3
    
    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(-1)
  })
})


describe('bounces', () => {
  test('if h = 3; bounce = .66; window = 1.5 then sightins should equal 3', () => {
    var h = 3.0
    var bounce = 0.66
    var window = 1.5

    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(3)
  })

  test('if h = 30; bounce = .66; window = 1.5 then sightins should equal 15', () => {
    var h = 30
    var bounce = 0.66
    var window = 1.5

    expect(bouncingball.bouncingBall(h, bounce, window)).toEqual(15)
  })
})

describe('isFloat', () => {
  test('3.0 => true', () => {
    expect(bouncingball.isFloat('3.0')).toEqual(false)
  })

  test('3.2 => true', () => {
    expect(bouncingball.isFloat(3.00001)).toEqual(true)
  })


})
