const rot13 = require('./rot13')

describe('rot13()', () => {
  test(" 'Test' should return 'Grfg' ", () => {
    expect(rot13.rot13('Test')).toEqual('Grfg')
  })

  test(" 'test' should return 'grfg' ", () => {
    expect(rot13.rot13('test')).toEqual('grfg')
  })

  test("numbers should be returned as they are ", () => {
    expect(rot13.rot13('t1est')).toEqual('g1rfg')
  })

  test("special characters should be returned as they are ", () => {
    expect(rot13.rot13('t:)est')).toEqual('g:)rfg')
  })
})
