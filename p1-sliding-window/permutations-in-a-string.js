const find_permutation = function(str, pattern) {
  // TODO: Write your code here
  // keep track of windowStart = 0
  // keep track of patternSet = new Set()
  // keep track of windowSet = new Set()
  // keep track of includes (boolean)

  // start looping through, moving windowEnd to the right
  //  if str[windowEnd] in patternSet
  //    remove from patternSet and
  //    add to windowSet

  //  if str[windowEnd] not in patternSet
  //    advance windowStart to windowEnd
  //    remove any letters in windowSet...
  //    ...back into patternSet (reset)
  //  if patternSet empty
  //    includes = true
  //  else
  //    includes = false
  // return includes

  let windowStart = 0
  let matched = 0
  let patternLetters = {}
  let include = false

  for (let letter of pattern) {
    if (!(letter in patternLetters)) {
      patternLetters[letter] = 0
    }
    patternLetters[letter]++
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightLetter = str[windowEnd]
    if (rightLetter in patternLetters) {
      patternLetters[rightLetter]--
      if (patternLetters[rightLetter] === 0) {
        matched++
      }
    }

    if (Object.keys(patternLetters).length === matched) {
      return true
    }

    if (windowEnd >= pattern.length - 1) {
      const leftLetter = str[windowStart]
      windowStart++
      if (leftLetter in patternLetters) {
        if (patternLetters[leftLetter] === 0) {
          matched--
        }
        patternLetters[leftLetter]++
      }
    }
  }
  return false
}
