/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Link: https://leetcode.com/problems/single-number/

//Time Complexity: O(n)
//Space Complexity: O(1)

const plusOne = function (digits) {
  return [...(BigInt(digits.join('')) + 1n).toString()];
};

//Runtime: 90 ms, faster than 64.80% of JavaScript online submissions for Single Number.
//Memory Usage: 41.6 MB, less than 94.72% of JavaScript online submissions for Single Number.
