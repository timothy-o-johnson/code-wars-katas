const rot13 = require('./rot13')

describe('rot13()', () => {
  test(" 'Test' should return 'Grfg' ", () => {
    expect(rot13.rot13('Test')).toEqual('Grfg')
  })

  test(" 'test' should return 'grfg' ", () => {
    expect(rot13.rot13('test')).toEqual('grfg')
  })
})
