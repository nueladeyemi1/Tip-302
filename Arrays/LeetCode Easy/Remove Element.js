/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//Link: https://leetcode.com/problems/remove-element/

//Time Complexity: O(n)
//Space Complexity: O(1)

function removeElement(nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
}

//Runtime: 80 ms, faster than 78.41% of JavaScript online submissions for Remove Element.
//Memory Usage: 41.7 MB, less than 92.57% of JavaScript online submissions for Remove Element.

//ALTERNATIVE

const removeElement = function (nums, val) {
  let i = 0;
  do {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  } while (i < nums.length);
};

//Runtime: 93 ms, faster than 78.41% of JavaScript online submissions for Remove Element.
//Memory Usage: 42.3 MB, less than 92.57% of JavaScript online submissions for Remove Element.
