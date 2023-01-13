/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = function(nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  console.log(Object.values(hashMap));
  //    const maximumVal

  for (let key of Object.keys(hashMap)) {
    if (+key % 2 === 0 && Math.max(Object.values(hashMap))) console.log(key);
  }

  console.log(hashMap);

  return -1;
};
