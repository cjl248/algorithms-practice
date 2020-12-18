const length_of_longest_substring = function(str, k) {
  // k = 1
  // str = a b b c d c

  // windowStart = 0
  // windowEnd = 0
  // start walking through string with for loop
  // create a alphabet counter object
  // add each letter to an obj of counts
  // duplicate k as variable: replacement
  // decrease replacement
  //
  let windowStart = 0;
  let maxLength = 0;
  let maxLetter;
  const alphaCount = {};

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const currLetter = str[windowEnd];

    if(alphaCount[currLetter]) {
      alphaCount[currLetter]++;
    } else {
      alphaCount[currLetter] = 1;
    }

    let currSubLength = windowEnd - windowStart + 1;

    let maxValue = 0;
    for(let letter in alphaCount) {
      if(alphaCount[letter] > maxValue) {
        maxLetter = letter;
        maxValue = alphaCount[letter];
      }
    }
    // A A B B C
    while(str[windowEnd] !== maxLetter && currSubLength - maxValue >= k) {
      if(alphaCount[windowStart] === 1) {
        delete alphaCount[windowStart];
      } else {
        alphaCount[windowStart]--;
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, currSubLength);
  }
  return maxLength;
};
