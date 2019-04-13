/* global describe, test, expect */

const tickets = require('./Vasya-Clerk')

describe('tickets', () => {
  test('Should return true if all customers have exact change', () => {
    var peopleInLine = [25, 25, 25, 25]

    expect(tickets(peopleInLine)).toEqual(true)
  })

  test('Should return false for this line of customers', () => {
    var peopleInLine = [25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100, 100, 50]

    expect(tickets(peopleInLine)).toEqual(false)
  })

  test('Should return false for this line of customers', () => {
    var peopleInLine = [25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100, 100, 50]

    expect(tickets(peopleInLine)).toEqual(false)
  })

  test('Should return false for this line of customers', () => {
    var peopleInLine = [25, 50, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 50, 50]

    expect(tickets(peopleInLine)).toEqual(false)
  })
})
