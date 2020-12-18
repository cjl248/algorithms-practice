const smallest_subarray_with_given_sum = function(s, arr) {
    let windowStart = 0
    let windowSum = 0
    let minLength = Infinity
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }

  if (minLength === Infinity) {
    return 0
  }

  return minLength
};
