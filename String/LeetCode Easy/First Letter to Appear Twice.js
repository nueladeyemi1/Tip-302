/**
 * @param {string} s
 * @return {character}
 */

//CHECK "FirstLetterToAppearImg" IN Img FOLDER FOR THE RUNTIME AND MEMORY
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
      return key;
    }
  }
};

// majorityElement([4, 1, 1]);

// majorityElement([2, 2, 1, 1, 1, 2, 2]);
