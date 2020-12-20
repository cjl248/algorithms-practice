const length_of_longest_substring = function(arr, k) {
  // TODO: Write your code here
  // keep track of windowStart
  // keep track of maxLength
  // keep track of zeroCount = 0
  // keep track of replacements = windowLength - zeroCount[count]

  // increase windowEnd to right
  // keep count of number of zeros seen so far
  // while count of zeros > k
  //  check if windowStart === 0
  //    decrement count if 0
  //  increment windowStart++
  // maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  let windowStart = 0
  let maxLength = 0
  let zeroCount = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 0) {
      zeroCount++
    }
    if (zeroCount > k) {
      if (arr[windowStart]  === 0) {
        zeroCount--
      }
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
};
