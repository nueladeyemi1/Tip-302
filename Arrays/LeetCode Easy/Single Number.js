/**
 * @param {number[]} nums
 * @return {number}
 */

//Link: https://leetcode.com/problems/single-number/

//Time Complexity: O(nlog(n))
//Space Complexity: O(1)

const singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    nums.sort((a, b) => {
      return a - b;
    });

    for (let variable of nums) {
      if (variable !== nums[nums.indexOf(variable) + 1]) return variable;
    }
  }
};

//Runtime: 458 ms, faster than 13.72% of JavaScript online submissions for Single Number.
//Memory Usage: 44.7 MB, less than 65.25% of JavaScript online submissions for Single Number.
