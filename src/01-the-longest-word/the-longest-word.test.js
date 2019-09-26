const dancingPhrase = 'É proibido dançar agarrado mas se quiser, pode'
const mathPhrase = '22 alunos entre os dez primeiros colocados'

const getLongestWord = (aString) => {
  const words = aString.split(' ')
  let longestWord = ''

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

test('getLongestWord should be a function', () => {
  expect(getLongestWord).toBeInstanceOf(Function)
})

test(`getLongestWord(${dancingPhrase}) should return "proibido"`, () => {
    const actual = getLongestWord(dancingPhrase)
    const expected = 'proibido'

    expect(actual).toBe(expected)
  }
)

test(`getLongestWord(${mathPhrase}) should return "primeiros"`, () => {
    const actual = getLongestWord(mathPhrase)
    const expected = 'primeiros'

    expect(actual).toBe(expected)
  }
)

