// SOLUTION 1 //
const pair_with_targetsum = function(arr, target_sum) {
  // TODO: Write your code here
  let pointerStart = 0
  let pointerEnd = arr.length - 1
  let currentSum = 0

  while (arr[pointerStart] + arr[pointerEnd] !== target_sum) {
    if (arr[pointerStart] + arr[pointerEnd] > target_sum) {
      pointerEnd--
    }
    if (arr[pointerStart] + arr[pointerEnd] < target_sum) {
      pointerStart++
    }
  }

  return [pointerStart, pointerEnd];
}

// SOLUTION 2 //
const pair_with_targetsum = function(arr, target_sum) {
  // TODO: Write your code here
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    if (arr[start] + arr[end] === target_sum) {
      return [start, end]
    }
    if (arr[start] + arr[end] > target_sum) {
      end--
    }
    if (arr[start] + arr[end] < target_sum) {
      start++
    }
  }
}

// SOLUTION 3 //
function pair_with_target_sum(arr, targetSum) {
  let numbers = {}
  
  for (i = 0; i < arr.length; i++) {
    let currentNumber = arr[i]
    if ((targetSum-currentNumber) in numbers) {
      return [numbers[targetSum-currentNumber], i]
    } else {
      numbers[currentNumber] = i
    }
  }
  return [1, -1]
}
