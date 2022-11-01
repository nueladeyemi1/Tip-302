/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Link: https://leetcode.com/problems/two-sum/

//Time Complexity: O(n^2)
//Space Complexity: O(1)

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) console.log([i, j]);
    }
  }
};

twoSum([3, 3], 6);

//Runtime: 207 ms, faster than 22.63% of JavaScript online submissions for Move Zeroes.
//Memory Usage: 42.4 MB, less than 72.82% of JavaScript online submissions for Move Zer
