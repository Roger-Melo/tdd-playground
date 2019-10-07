import errorMessage from './utils/error-message'

const getFactorial = num => {
  if (typeof num !== 'number') {
    throw new TypeError(errorMessage)
  }

  const firstNumbers = [ 0, 1 ]
  return firstNumbers.includes(num)
    ? 1
    : num * getFactorial(num - 1)
}

export default getFactorial
