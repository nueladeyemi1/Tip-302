/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Link: https://leetcode.com/problems/intersection-of-two-arrays/

//Time Complexity: O(n)
//Space Complexity: O(Log(n))

const intersection = function (nums1, nums2) {
  const theSet1 = new Set(nums1);
  const theSet2 = new Set(nums2);

  let intersect = [];

  for (let element of theSet1) {
    if (theSet2.has(element) === true) intersect.push(element);
  }

  return intersect;
};

//Runtime: 60 ms, faster than 98.20% of JavaScript online submissions for Intersection of Two Arrays.
//Memory Usage: 43.6 MB, less than 54.13% of JavaScript online submissions for Intersection of Two Arrays.
