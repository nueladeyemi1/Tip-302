/**
 * @param {string} s
 * @return {number}
 */

//CHECK "FirstUniqueCharacterImg" IN Img FOLDER FOR THE RUNTIME AND MEMORY
const firstUniqChar = function(s) {
  const setArr = {};

  //CREATING A KEY VALUE OBJECT IN setArr
  for (let i = 0; i < s.length; i++) {
    if (!setArr[s[i]]) {
      setArr[s[i]] = 1;
    } else {
      setArr[s[i]]++;
    }
  }

  //LOOPING THE setArr

  for (let key of Object.keys(setArr)) {
    if (setArr[key] === 1) return s.indexOf(key);
  }

  return -1;
};

firstUniqChar('loveleetcode');
firstUniqChar('aabb');

// const longestPrefix = function (strs) {
//   let prefix = '';
//   for (let element of strs) {
//     let next = strs[strs.indexOf(element) + 1];
//     console.log(element);
//     console.log(next);
//     for (let j = 0; j < element.length; j++) {
//       console.log(element[j], next[j]);
//       // console.log(strs[i][j] === next[j]);
//       // if (strs[i][j] === next[j]) prefix += strs[i][j];
//     }
//   }
//   // console.log(prefixt);
// };

// longestPrefix(['flower', 'flavour', 'flat']);
