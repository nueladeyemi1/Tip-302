// /**
//  * @param {string} s
//  * @return {number}
//  */
// const firstUniqChar = function (s) {
//   const collector = [];
//   const sArr = [...s];
//   console.log(sArr);
//   let finder;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i + 1]) {
//       collector.push(s[i]);
//     }
//   }

//   for (let j = 0; j < sArr.length; j++) {
//     finder = sArr.find(element => element === collector[j]);
//     if (finder === sArr[j]) {
//       console.log(j);
//     }
//   }

//   console.log(finder);

//   console.log(collector);
// };

// firstUniqChar('loveleetcode');
// firstUniqChar('aabb');

const longestPrefix = function (strs) {
  let prefix = '';
  for (let element of strs) {
    let next = strs[strs.indexOf(element) + 1];
    console.log(element);
    console.log(next);
    for (let j = 0; j < element.length; j++) {
      console.log(element[j], next[j]);
      // console.log(strs[i][j] === next[j]);
      // if (strs[i][j] === next[j]) prefix += strs[i][j];
    }
  }
  // console.log(prefixt);
};

longestPrefix(['flower', 'flavour', 'flat']);
