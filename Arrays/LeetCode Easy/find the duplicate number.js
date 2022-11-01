/**
 * @param {number[]} nums
 * @return {number}
 */

//Link: https://leetcode.com/problems/find-the-duplicate-number/

//Time Complexity: O(nLog(n))
//Space Complexity: O(1)

const findDuplicate = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  for (let element of nums) {
    if (element === nums[nums.indexOf(element) + 1]) return element;
  }
};

//Runtime: 8597 ms, faster than 5.03% of JavaScript online submissions for Find the Duplicate Number.
//Memory Usage: 54.1 MB, less than 43.51% of JavaScript online submissions for Find the Duplicate Number.
