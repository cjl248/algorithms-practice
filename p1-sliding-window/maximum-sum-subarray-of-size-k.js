const max_sub_array_of_size_k = function(k, arr) {
  let windowStart = 0
  let windowSum = 0
  let maxSum = 0
  let windowLength = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    windowLength++

    if (windowLength > k) {
      windowSum -= arr[windowStart]
      windowLength--
      windowStart++
    }
    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum
}
