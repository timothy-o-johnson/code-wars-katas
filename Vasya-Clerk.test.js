const tickets = require('./Vasya-Clerk')

describe('tickets', () => {
  // mockup of item objects

  test('Should return true if all customers have exact change', () => {
    var peopleInLine = [50]

    expect(tickets(peopleInLine)).toEqual(true)
  })
})
