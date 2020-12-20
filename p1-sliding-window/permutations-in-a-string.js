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
  let patternLetters = {}
  let windowLetters = {}
  let inludes = false

  for (let letter of str) {
    if (!(letter in patternLetters)) {
      patternLetters[letter] = 0
    }
    patternLetters[letter]++
  }
  const _pattern = patternLetters

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (str[windowEnd] in patternLetters) {
      patternLetters[str[windowEnd]]--
      if (patternLetters[str[windowEnd]] === 0) {
        delete patternLetters[str[windowEnd]]
      }
      if (!(str[windowEnd] in windowLetters)) {
        windowLetters[str[windowEnd]] = 0
      }
      windowLetters[str[windowEnd]]++
    } else {
    // if (!(str[windowEnd] in patternLetters)) {
      windowStart = windowEnd
      windowLetters = {}
      patternLetters = _patern
    }
    if (Object.keys(patternLetters).length === 0) {
      includes = true
    } else {
      includes = false
    }
    console.log(includes)
  }
  return includes
};
