/**
 * @param {string} s
 * @return {string}
 */

//Link: https://leetcode.com/problems/reverse-vowels-of-a-string

//Time Complexity: O(n)
//Space Complexity: O(nlog(n))

const reverseVowels = function (s) {
  const newArr = [...s];
  const check = [];

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === 'a' ||
      s[i] === 'e' ||
      s[i] === 'i' ||
      s[i] === 'o' ||
      s[i] === 'u' ||
      s[i] === 'A' ||
      s[i] === 'E' ||
      s[i] === 'I' ||
      s[i] === 'O' ||
      s[i] === 'U'
    ) {
      check.push(s[i]);
    }
  }

  let lengthState = 0;

  for (let j = newArr.length; j >= 0; j--) {
    if (
      s[j] === 'a' ||
      s[j] === 'e' ||
      s[j] === 'i' ||
      s[j] === 'o' ||
      s[j] === 'u' ||
      s[j] === 'A' ||
      s[j] === 'E' ||
      s[j] === 'I' ||
      s[j] === 'O' ||
      s[j] === 'U'
    ) {
      newArr[j] = check[lengthState];
      lengthState++;
    }
  }

  return newArr.join('');
};

//Runtime: 197 ms, faster than 16.77% of JavaScript online submissions for Reverse Vowels of a String.
//Memory Usage: 52.8 MB, less than 14.84% of JavaScript online submissions for Reverse Vowels of a String.

reverseVowels('leetcode');
