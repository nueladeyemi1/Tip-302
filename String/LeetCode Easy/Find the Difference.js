/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

//Link: https://leetcode.com/problems/roman-to-integer

//Time Complexity: O(n)
//Space Complexity: O(m x n)

const findTheDifference = function (s, t) {
  const sArr = [...s];
  const tArr = [...t];
  for (let i = 0; i < sArr.length; i++) {
    let finder = tArr.find(element => element === sArr[i]);
    if (finder === sArr[i]) {
      tArr.splice(tArr.indexOf(finder), 1);
    }
  }

  return tArr.join('');
};

//Runtime: 146 ms, faster than 8.17% of JavaScript online submissions for Find the Difference.
//Memory Usage: 44.3 MB, less than 44.48% of JavaScript online submissions for Find the Difference.
