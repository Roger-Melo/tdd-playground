const add = (num1, num2) => {
  return num1 + num2
}

test('add should be a function', () => {
  expect(add).toBeInstanceOf(Function)
})

test('add(1, 2) should return 3', () => {
  const actual = add(1, 2)
  const expected = 3

  expect(actual).toBe(expected)
})

test('add(3, 4) should return 7', () => {
  const actual = add(3, 4)
  const expected = 7

  expect(actual).toBe(expected)
})

test('add(3, 4) should return 7', () => {
  const actual = add(3, 4)
  const expected = 7

  expect(actual).toBe(expected)
})

test('add(5, 6) should return 7', () => {
  const actual = add(3, 4)
  const expected = 7

  expect(actual).toBe(expected)
})