/**
 * @param {number} num
 * @return {string}
 */

//Link: https://leetcode.com/problems/integer-to-roman

//Time Complexity: O(log(n))
//Space Complexity: O(1)

const intToRoman = function (num) {
  const intRepresentation = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];

  const romanRepresentation = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let output = '';

  let i = 0;
  while (num !== 0) {
    if (num >= intRepresentation[i]) {
      num -= intRepresentation[i];
      output += romanRepresentation[i];
      continue;
    }
    i++;
  }
  return output;
};

//Runtime: 242 ms, faster than 28.40% of JavaScript online submissions for Integer to Roman.
//Memory Usage: 47.5 MB, less than 63.02% of JavaScript online submissions for Integer to Roman.

intToRoman(3);
