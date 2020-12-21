const find_string_anagrams = function(str, pattern) {
  // TODO: Write your code here
  // keep track of letter frequency: letterCount = {}
  // keep track of matches = 0
  // keep track of windowStart =
  // keep track of starting indices: result_indexes = []

  // increase the window size as long as the next right character is in the pattern
  //  if it is then reduce its count in letterCount
  //  if its count is 0 increase matches
  //  if matches = number of keys in letterCount we have a match
  //  add window end to result_indeces
  // shrink the window if the window is larger than the length of the pattern
  //  advance windowStart
  //  if the number of appreances of the current letter is 0 in the count decrement matches
  //    increment the letter count

  let result_indexes = []
  let matches = 0
  let windowStart = 0
  let letterCount = {}

  for (let letter of pattern) {
    if(!(letter in letterCount)) {
      letterCount[letter] = 0
    }
    letterCount[letter]++
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightLetter = str[windowEnd]
    if (rightLetter in letterCount) {
      letterCount[rightLetter]--
      if (letterCount[rightLetter] === 0) {
        matches++
      }
    }
    if (matches === Object.keys(letterCount).length) {
      result_indexes.push(windowStart)
    }
    if (windowEnd >= pattern.length - 1) {
      const leftLetter = str[windowStart]
      windowStart++
      if (letterCount[leftLetter] === 0) {
        matches--
      }
      letterCount[leftLetter]++
    }
  }
  return result_indexes
};
