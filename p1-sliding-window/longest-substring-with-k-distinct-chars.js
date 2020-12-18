const longest_substring_with_k_distinct = function(str, k) {
  let windowStart = 0
  let maxLength = 0
  let charCount = {}
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (charCount[str[windowEnd]]) { charCount[str[windowEnd]]++ }
    else { charCount[str[windowEnd]] = 1 }
    while (Object.keys(charCount).length > k) {
      charCount[str[windowStart]]--
      if (charCount[str[windowStart]] === 0) { delete charCount[str[windowStart]] }
      windowStart++
    }
    let length = windowEnd - windowStart + 1
    maxLength = Math.max(maxLength, length)
  }
  return maxLength
};
