const getLongestWord = (aString) =>
  aString
    .split(/[\s,:;.?!()"']/gm)
    .reduce((acc, curr) => acc.length >= curr.length ? acc : curr, '')

export default getLongestWord