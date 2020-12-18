const fruits_into_baskets = function(fruits) {
  let windowStart = 0
  let maxLength = 0
  const pickedFruit = {}

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    if (pickedFruit[fruits[windowEnd]]) { pickedFruit[fruits[windowEnd]]++ }
    else { pickedFruit[fruits[windowEnd]] = 1 }
    while (Object.keys(pickedFruit).length > 2) {
      pickedFruit[fruits[windowStart]]--
      if (pickedFruit[fruits[windowStart]] === 0) { delete pickedFruit[fruits[windowStart]] }
      windowStart++
    }
    let length = windowEnd - windowStart + 1
    maxLength = Math.max(maxLength, length)
  }
  return maxLength
};
