import { maxSequence } from './Maximum-Subarray-Sum'

describe('maxSequence', () => {
  // mockup of item objects

  test('Should return an array containing just the last value if that is the max sequence ', () => {
    var arr = [25, 1, 0, -1000, -1, -1, 100]
    expect(maxSequence(arr)).toEqual(100)
  })
  
})
