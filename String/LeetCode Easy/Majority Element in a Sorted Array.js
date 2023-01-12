/**
 * @param {string} s
 * @return {character}
 */

//COMPANY: SalesForce

const isMajority = function(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  for (let key of Object.keys(hashMap)) {
    // console.log(typeof key, [target]);
    if (+key === target && target > Math.floor(nums.length / 2)) {
      console.log('True');
    } else {
      console.log('False');
    }
  }
  console.log(hashMap);
};

isMajority([2, 4, 5, 5, 6, 6], 5);
isMajority([10, 100, 101, 101], 101);
