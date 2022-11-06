/**
 * @param {number[]} nums
 * @return {string[]}
 */

//Link: https://leetcode.com/problems/summary-ranges/

//Time Complexity: O(n)
//Space Complexity: O(n)

const summaryRanges = function (nums) {
  const containerRange = [];
  let initial = null;
  for (let i = 0; i < nums.length; i++) {
    if (initial === null) {
      if (!nums[i + 1] || nums[i + 1] - nums[i] !== 1) {
        containerRange.push(`${nums[i]}`);
      } else {
        initial = nums[i];
      }
    } else if (!nums[i + 1] || nums[i + 1] - nums[i] !== 1) {
      containerRange.push(`${initial}->${nums[i]}`);
      initial = null;
    }
  }
  return containerRange;
};

//Runtime: 102 ms, faster than 28.25% of JavaScript online submissions for Summary Ranges.
//Memory Usage: 41.8 MB, less than 80.97% of JavaScript online submissions for Summary Ranges.

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////////////////////
//////////////////////////////////////////

// const summaryRanges = function (nums) {
//   let outputContainer = [];

//   if (nums.length === 1) outputContainer.push(`${nums[0]}`);
//   if (nums.length === 0) return nums;

//   if (nums.length === 2 && nums[1] - nums[0] > 2) {
//     outputContainer.push(`${nums[0]}`);
//     outputContainer.push(`${nums[1]}`);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1] - 1 && nums[i + 1] === nums[i + 2] - 1) {
//       outputContainer.push(`${nums[i]}->${nums[i + 2]}`);
//     } else if (nums[i] === nums[i + 1] - 1 && nums[i - 1] !== nums[i] - 1) {
//       outputContainer.push(`${nums[i]}->${nums[i + 1]}`);
//     } else if (nums[i] === nums[i - 1] + 2 && nums[i + 1] === undefined) {
//       outputContainer.push(`${nums[i]}`);
//     } else if (nums[i] === nums[i + 1] - 2 && nums[i - 1] === undefined) {
//       outputContainer.push(`${nums[i]}`);
//     } else if (nums[i + 1] - nums[i] === 2 && nums[i] - nums[i - 1] === 2) {
//       outputContainer.push(`${nums[i]}`);
//     } //else if (nums[i] - nums[i+1] < 3 && nums[i-1] === undefined && nums.length === 2 ){
//     // outputContainer.push(`${nums[i]}`)
//     //}   else if (nums[i] - nums[i-1] > 3 && nums[i+1] === undefined && nums.length === 2 ){
//     // outputContainer.push(`${nums[i]}`)
//     //}
//   }
//   return outputContainer;
// };
