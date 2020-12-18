const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0

  for (window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end]
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  return maxSum;
}
