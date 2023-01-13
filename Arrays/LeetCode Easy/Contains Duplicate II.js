/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//CHECK "Contains Duplicate II" IN Img FOLDER FOR THE RUNTIME AND MEMORY

const containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
    }
  }
  return false;
};
