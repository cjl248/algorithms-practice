const find_substring = function(str, pattern) {
  // TODO: Write your code here
  // keep track of letterCount = {}
  // keep track of window = ''
  // keep track of matches = 0
  // keep track of windowStart = 0

  // start adding letters to window from right
  // if letter is in patternCount
  //  subtract one from patternCount
  //  increase matches++
  // check if matches === length of distince chars in patternCount
  //  if it does return the current window
  // shrink the window while matches === length Obkect.keys(patternCount).length
  // if the length of the shorter string is less reset the answer

  const patternCount = {}
  let windowStart = 0
  let matches = 0
  let answer = ''

  for (let letter of pattern) {
    if (!(letter in patternCount)) {
      patternCount[letter] = 0
    }
    patternCount[letter] += 1
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightLetter = str[windowEnd]
    if (rightLetter in patternCount) {
      if (patternCount[rightLetter] !== 0) {
        matches++
        patternCount[rightLetter]--
      }
    }
    const leftLetter = str[windowStart]
    if (windowEnd > pattern.length) {
      windowStart++
      if (patternCount[leftLetter] === 0) {
        patternCount[leftLetter]++
      }
    }
    if (matches === Object.keys(patternCount).length) {
      answer =  str.slice(windowStart, windowEnd)
    }
  }
  return answer
}
