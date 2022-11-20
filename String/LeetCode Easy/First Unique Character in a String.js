/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const collector = [];
  const sArr = [...s];
  console.log(sArr);
  let finder;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      collector.push(s[i]);
    }
  }

  for (let j = 0; j < sArr.length; j++) {
    finder = sArr.find(element => element === collector[j]);
    if (finder === sArr[j]) {
      console.log(j);
    }
  }

  console.log(finder);

  console.log(collector);
};

firstUniqChar('loveleetcode');
firstUniqChar('aabb');
