/**
 * @param {string} s
 * @return {character}
 */
const majorityElement = function(nums) {
  const theMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!theMap[nums[i]]) {
      theMap[nums[i]] = 1;
    } else {
      theMap[nums[i]] += 1;
    }
  }

  for (let key of Object.keys(theMap)) {
    if (theMap[key] >= nums.length / 2) {
      console.log(theMap[[key]]);
    }
  }

  console.log(theMap);
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
