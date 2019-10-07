import getFactorial from './factorial'
import errorMessage from './utils/error-message'

describe('Happy Path', () => {
  test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function)
  })
  
  test('getFactorial(3) should return 6', () => {
    const actual = getFactorial(3)
    const expected = 6
  
    expect(actual).toBe(expected)
  })
  
  test('getFactorial(4) should return 24', () => {
    const actual = getFactorial(4)
    const expected = 24
  
    expect(actual).toBe(expected)
  })
})

describe('Unhappy Path', () => {
  test('getFactorial() should throw a TypeError', () => {
    try {
      getFactorial()
    } catch (error) {
      expect(error.name).toBe('TypeError')
    }
  })
  
  test(`getFactorial() should throw a TypeError with message "${errorMessage}"`, () => {
    try {
      getFactorial()
    } catch (error) {
      expect(error.message).toBe(errorMessage)
    }
  })
  
  test(`getFactorial(0) should return 1`, () => {
    const actual = getFactorial(0)
    const expected = 1

    expect(actual).toBe(expected)
  })
})

