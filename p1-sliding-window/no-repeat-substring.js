const non_repeat_substring = function(str) {
  // TODO: Write your code here
  // max repeat characters is 1
  // add a key of the letter to the object with value 1
  // continue adding until a key in the object has a value of > 1 use 'in'
  // while key str[windowEnd] in object take
    // remove keys from object
    // start++

  // update the longest length
  // repeat until there are no more characters to add to the end i.e. end is at end of str

  let windowStart = 0
  let maxLength = 0
  const letters = new Set()

  // length = 2
  // { a, b }
  //   e
  // s
  // a b c c d e
  //   _
  letters.add(str[0])
  for (let windowEnd = 1; windowEnd < str.length; windowEnd++) {
    while(letters.has(str[windowEnd])) {
      letters.delete(str[windowStart])
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    letters.add(str[windowEnd])
  }

  return maxLength
};
