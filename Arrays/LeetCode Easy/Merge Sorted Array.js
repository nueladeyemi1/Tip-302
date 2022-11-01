/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//https://leetcode.com/problems/merge-sorted-array/

const merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  nums1.push(...nums2);
  nums1.sort((a, b) => {
    return a - b;
  });
  return nums1;
};

//Runtime: 81 ms, faster than 78.59% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 41.7 MB, less than 94.41% of JavaScript online submissions for Merge Sorted Array.

//ALTERNATIVE

const merge1 = function (nums1, m, nums2, n) {
  if (m === 0 && nums1.length === 1) nums1.splice(0, 1);
  for (let i = nums1.length - 1; i >= m; i--) {
    if (nums1[i] === 0) {
      nums1.splice(i, 1);
    }
    if (nums1[i] > 0) break;
  }

  for (let element of nums2) {
    nums1.push(element);
  }

  nums1.sort((a, b) => {
    return a - b;
  });

  return nums1;
};

//Runtime: 94 ms, faster than 60.40% of JavaScript online submissions for Merge Sorted Array.
//Memory Usage: 42 MB, less than 62.93% of JavaScript online submissions for Merge Sorted Array.

//ALTERNATIVE

const merge2 = function (nums1, m, nums2, n) {
  if (m === 0 && nums1.length === 1) nums1.splice(0, 1);
  for (let i = nums1.length - 1; i >= m; i--) {
    if (nums1[i] === 0) {
      nums1.splice(i, 1);
    }
    if (nums1[i] > 0) break;
  }

  nums1.push(...nums2);

  nums1.sort((a, b) => {
    return a - b;
  });

  return nums1;
};

//Runtime: 116 ms, faster than 14.36% of JavaScript online submissions for Merge Sorted Array.
//Memory Usage: 42 MB, less than 72.96% of JavaScript online submissions for Merge Sorted Array.
