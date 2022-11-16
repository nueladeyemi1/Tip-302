/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//Link: https://leetcode.com/problems/reverse-string

//Time Complexity: O(1)
//Space Complexity: O(1)

const reverseString = function (s) {
  for (let i = s.length - 1; i >= 0; i--) {
    s.push(s[i]);
    s.splice(i, 1);
  }
};

//Runtime: 3243 ms, faster than 5.02% of JavaScript online submissions for Reverse String.
//Memory Usage: 50.8 MB, less than 7.32% of JavaScript online submissions for Reverse String.
