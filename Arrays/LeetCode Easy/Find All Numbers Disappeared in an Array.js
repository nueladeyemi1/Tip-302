/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

//Time Complexity: O(nLog(n))
//Space Complexity: O(Log(n))

const findDisappearedNumbers = function (nums) {
  let outputArray = [];

  let i = 1;

  while (i <= nums.length) {
    const finder = nums.find(values => values === i);
    if (finder === undefined) outputArray.push(i);
    i++;
  }

  return outputArray;
};

//Runtime: 5467 ms, faster than 26.29% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
//Memory Usage: 49.8 MB, less than 79.93% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

////

///

//ALTERNATE
///NOTE FOR BELOW CODE
/// FIXING SOON, DOES NOT WORK FOR ALL CASES//
// const findDisappearedNumbers1 = function (nums) {
//   nums.sort((a, b) => {
//     return a - b;
//   });

//   let counter = 1;
//   let outputArray = [];

//   for (let element of nums) {
//     if (element === nums[nums.indexOf(element) + 1]) {
//       nums.splice(nums.indexOf(element), 1);
//     }

//     if (counter !== element) outputArray.push(counter);

//     counter++;
//   }

//   return outputArray;
// };

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
findDisappearedNumbers([1, 1]);
