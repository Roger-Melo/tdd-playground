import getLongestWord from './the-longest-word'

describe('Happy Path', () => {
  const dancingPhrase = 'É proibido dançar agarrado mas se quiser, pode'
  const mathPhrase = '22 alunos entre os dez primeiros colocados'

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
})

describe('Unhappy Path', () => {
  test('getLongestWord() should thrown an TypeError', () => {
    try {
      getLongestWord()
    } catch (error) {
      expect(error.name).toBe('TypeError')
    }
  })

  const typeErrorMessage = 'getLongestWord should receive a string as argument'

  test(`getLongestWord() should thrown an TypeError with message "${typeErrorMessage}"`, () => {
    try {
      getLongestWord()
    } catch (error) {
      expect(error.message).toBe(typeErrorMessage)
    }
  })

  test(`getLongestWord(7) should thrown an TypeError with message "${typeErrorMessage}"`, () => {
    try {
      getLongestWord(7)
    } catch (error) {
      expect(error.message).toBe(typeErrorMessage)
    }
  })

  const noSpaceMessage = 'The passed string should have two or more words'

  test(`getLongestWord('oiCaraDeBoi') should return a message "${noSpaceMessage}"`, () => {
    const actual = getLongestWord('oiCaraDeBoi')
    const expected = noSpaceMessage

    expect(actual).toBe(expected)
  })

  test(`getLongestWord('Twitter') should return a message "${noSpaceMessage}"`, () => {
    const actual = getLongestWord('Twitter')
    const expected = noSpaceMessage

    expect(actual).toBe(expected)
  })
})