/**
 * @param {number[]} nums
 * @return {number[]}
 */

//CHECK "" IN Img FOLDER FOR THE RUNTIME AND MEMORY

const majorityElement = function(nums) {
  const hashMap = {};
  const container = [];

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }
  for (let key of Object.keys(hashMap)) {
    if (hashMap[key] > Math.floor(nums.length / 3)) container.push(+key);
  }
  return container;
};
