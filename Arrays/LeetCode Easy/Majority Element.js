/**
 * @param {number[]} nums
 * @return {number}
 */

//Link: https://leetcode.com/problems/majority-element/

//Time Complexity: O(nLog(n))
//Space Complexity: O(1)

const majorityElement = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  if (nums.length === 1) return nums[0];

  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      if (count >= nums.length / 2) return nums[i];
    } else {
      count = 1;
    }
  }
};

//Runtime: 102 ms, faster than 70.45% of JavaScript online submissions for Majority Element.
//Memory Usage: 46.3 MB, less than 8.14% of JavaScript online submissions for Majority Element.
