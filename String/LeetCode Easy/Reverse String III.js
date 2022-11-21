/**
 * @param {string} s
 * @return {string}
 */

//Link: https://leetcode.com/problems/reverse-words-in-a-string-iii

//Time Complexity: O(n)
//Space Complexity: O(n*n)

const reverseWords = function (s) {
  const theArray = s.split('');
  let reversedString = [];
  for (let i = theArray.length - 1; i >= 0; i--) {
    reversedString.push(theArray[i]);
  }
  const newString = reversedString.join('').split(' ');
  const realString = [];
  for (let i = newString.length - 1; i >= 0; i--) {
    realString.push(newString[i]);
  }

  return realString.join(' ');
};

//Runtime: 92 ms, faster than 83.57% of JavaScript online submissions for Reverse Words in a String III.
//Memory Usage: 51.9 MB, less than 5.34% of JavaScript online submissions for Reverse Words in a String III.
