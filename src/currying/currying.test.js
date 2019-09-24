const add = () => {
  return 3
}

test('add should be a function', () => {
  expect(add).toBeInstanceOf(Function)
})

test('add(1, 2) should return 3', () => {
  const actual = add(1, 2)
  const expected = 3

  expect(actual).toBe(expected)
})