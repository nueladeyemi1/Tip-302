/**
 * @param {string} s
 * @return {number}
 */

//Link: https://leetcode.com/problems/length-of-last-word

//Time Complexity: O(1)
//Space Complexity: O(log(n))

const lengthOfLastWord = function (s) {
  const newArr = s.trim().split(' ');
  return newArr[newArr.length - 1].length;
};

//Runtime: 81 ms, faster than 74.71% of JavaScript online submissions for Length of Last Word.
//Memory Usage: 41.9 MB, less than 63.71% of JavaScript online submissions for Length of Last Word.

lengthOfLastWord('Hello World');
lengthOfLastWord('luffy is still joyboy');
lengthOfLastWord('   fly me   to   the moon  ');
