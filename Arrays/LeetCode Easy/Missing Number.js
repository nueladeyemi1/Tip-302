/**
 * @param {number[]} nums
 * @return {number}
 */

//Link: https://leetcode.com/problems/single-number/

//Time Complexity: O(nLog(n))
//Space Complexity: O(1)

const missingNumber = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  if (nums.length === 1 && nums[0] === 1) return 0;

  let range = nums.length;

  for (let i = nums.length; i >= 0; i--) {
    if (range !== nums[i - 1]) return range;

    range--;
  }
};

//Runtime: 148 ms, faster than 26.59% of JavaScript online submissions for Missing Number.
//Memory Usage: 44.2 MB, less than 77.39% of JavaScript online submissions for Missing Number.
