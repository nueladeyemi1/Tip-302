/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        i !== j &&
        Math.abs(i - j) <= indexDiff &&
        Math.abs(nums[i] - nums[j]) <= valueDiff
      )
        return true;
    }
  }

  return false;
};

//PASSED 45 of 47 Test Cases, I WILL BE REVISITING...!
