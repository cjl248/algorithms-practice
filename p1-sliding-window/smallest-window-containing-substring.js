const find_substring = function(str, pattern) {
  // variables: obj of pattern's counts, obj of curr letter counts, shortest subStr, windowSt, windowEn
  // (for loop) move windowEnd
    // while (currObj >= pattObj)
      // set shortSubStr IF it is less than shortSubStr.length
      // incrementing window start (shrink)


  let windowStart = 0;
  let shortestSubStr = "";
  const currObj = {};
  const patternObj = {};

  for(let letter of pattern) {
    if(patternObj[letter]) {
      patternObj[letter]++;
    } else {
      patternObj[letter] = 1;
    }
  }

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let currLetter = str[windowEnd];
    if(patternObj[currLetter]) {
      if(currObj[currLetter]) {
        currObj[currLetter]++;
      } else {
        currObj[currLetter] = 1;
      }
    }

    while(compare_objs(patternObj, currObj) === true) {
      let subStr = str.slice(windowStart, windowEnd + 1);

      if(shortestSubStr === "") {
        shortestSubStr = subStr;
      } else {
        if(subStr.length < shortestSubStr.length) {
          shortestSubStr = subStr;
        }
      }
      currObj[str[windowStart]]--;
      windowStart++;
    }
  }

  return shortestSubStr;
}

const compare_objs = function(patternObj, currObj) {
  let bool = true;
  for(let letter in patternObj) {
    console.log(letter)
    if(currObj[letter] === undefined) {
      console.log('not found')
      bool = false;
    } else if (currObj[letter] < patternObj[letter]) {
      bool = false;
    }
  }
  return bool;
}
