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

export default getLongestWord