//Link: https://leetcode.com/problems/kth-largest-element-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Time Complexity: O(nLog(n))
//Space Complexity: O(1)

const findKthLargest = function (nums, k) {
  nums.sort((a, b) => {
    return a - b;
  });

  return nums[nums.length - k];
};

//Runtime: 323 ms, faster than 30.09% of JavaScript online submissions for Kth Largest Element in an Array.
//Memory Usage: 51.7 MB, less than 37.90% of JavaScript online submissions for Kth Largest Element in an Array.

//////////////////////////////////////////////

//Time Complexity: O(n^2Log(n))
//Space Complexity: O(1)

const findKthLargest1 = function (nums, k) {
  //Time Complexity: O(nLog(n))
  nums.sort((a, b) => {
    return a - b;
  });

  //Time Complexity: O(n)
  for (let i = k; i > 1; i--) {
    nums.pop();
  }
  return nums[nums.length - 1];
};

//Runtime: 347 ms, faster than 21.73% of JavaScript online submissions for Kth Largest Element in an Array.
//Memory Usage: 51.4 MB, less than 49.92% of JavaScript online submissions for Kth Largest Element in an Array
