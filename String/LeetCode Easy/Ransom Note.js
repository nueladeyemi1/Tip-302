/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//Link: https://leetcode.com/problems/ransom-note

//Time Complexity: O(n)
//Space Complexity: O(log(n))

const canConstruct = function (ransomNote, magazine) {
  const checkerArray = [...magazine];
  const check = [];

  for (let i = 0; i < ransomNote.length; i++) {
    const found = checkerArray.find(element => ransomNote[i] === element);

    if (found === ransomNote[i]) {
      checkerArray.splice(checkerArray.indexOf(found), 1);
      check.push(found);
    }
  }

  return check.length === ransomNote.length;
};

//Runtime: 136 ms, faster than 63.82% of JavaScript online submissions for Ransom Note.
//Memory Usage: 46.6 MB, less than 27.77% of JavaScript online submissions for Ransom Note.

canConstruct('aaa', 'aab');
