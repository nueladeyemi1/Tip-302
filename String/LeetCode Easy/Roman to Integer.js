/**
 * @param {string} s
 * @return {number}
 */

//Link: https://leetcode.com/problems/roman-to-integer

//Time Complexity: O(n)
//Space Complexity: O(1)

const romanToInt = function (s) {
  let romanRepresentation = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && s[i + 1] === 'V') {
      sum += 4;
      i++;
    } else if (s[i] === 'I' && s[i + 1] === 'X') {
      sum += 9;
      i++;
    } else if (s[i] === 'X' && s[i + 1] === 'L') {
      sum += 40;
      i++;
    } else if (s[i] === 'X' && s[i + 1] === 'C') {
      sum += 90;
      i++;
    } else if (s[i] === 'C' && s[i + 1] === 'D') {
      sum += 400;
      i++;
    } else if (s[i] === 'C' && s[i + 1] === 'M') {
      sum += 900;
      i++;
    } else {
      sum += romanRepresentation[s[i]];
    }
  }

  return sum;
};

//Runtime: 236 ms, faster than 41.45% of JavaScript online submissions for Roman to Integer.
//Memory Usage: 48.4 MB, less than 29.28% of JavaScript online submissions for Roman to Integer.

romanToInt('XIV');
romanToInt('MCMXCIV');
