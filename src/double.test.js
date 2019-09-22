const double = require('./double')

test('Should be a function', () => {
  expect(double).toBeInstanceOf(Function)
})