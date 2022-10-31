/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//Link: https://leetcode.com/problems/merge-intervals

//Time Complexity: O(nLog(n))
//Space Complexity: O(n)

const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const containerInterval = [];
  let initial = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (initial[1] >= intervals[i][0]) {
      initial = [initial[0], Math.max(initial[1], intervals[i][1])];
    } else {
      containerInterval.push(initial);
      initial = intervals[i];
    }
  }
  containerInterval.push(initial);
  return containerInterval;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

//Runtime: 106 ms, faster than 92.40% of JavaScript online submissions for Merge Intervals.
//Memory Usage: 48.5 MB, less than 84.97% of JavaScript online submissions for Merge Intervals.
