/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Time Complexity: O(n)
//Space Complexity: O(1)

const moveZeroes = function (nums) {
  for (let element of nums) {
    if (element === 0) {
      nums.splice(nums.indexOf(element), 1);
      nums.push(element);
    }
  }
};

//Runtime: 263 ms, faster than 8.74% of JavaScript online submissions for Move Zeroes.
//Memory Usage: 47.4 MB, less than 8.11% of JavaScript online submissions for Move Zeroes.
