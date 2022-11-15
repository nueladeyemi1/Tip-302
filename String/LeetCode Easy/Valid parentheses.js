/**
 * @param {string} s
 * @return {boolean}
 */

//Link: https://leetcode.com/problems/valid-parentheses

//Time Complexity: O(n)
//Space Complexity: O(log(n))

const isValid = function (s) {
  const characters = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      characters.splice(i, 1, s[i]);
    } else if (
      s[i] === ')' &&
      characters[characters.length - 1] === '(' &&
      characters.length !== 0
    ) {
      characters.pop();
    } else if (
      s[i] === ']' &&
      characters[characters.length - 1] === '[' &&
      characters.length !== 0
    ) {
      characters.pop();
    } else if (
      s[i] === '}' &&
      characters[characters.length - 1] === '{' &&
      characters.length !== 0
    ) {
      characters.pop();
    } else {
      return false;
    }
  }

  return characters.length === 0;
};

//Runtime: 73 ms, faster than 88.90% of JavaScript online submissions for Valid Parentheses.
//Memory Usage: 43 MB, less than 27.92% of JavaScript online submissions for Valid Parentheses.

isValid('[()()]');
