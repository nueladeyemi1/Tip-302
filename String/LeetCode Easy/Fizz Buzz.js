/**
 * @param {number} n
 * @return {string[]}
 */

//Link: https://leetcode.com/problems/roman-to-integer

//Time Complexity: O(n)
//Space Complexity: O(n)

const fizzBuzz = function (n) {
  let stringArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('1');
      stringArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      stringArray.push('Fizz');
    } else if (i % 5 === 0) {
      stringArray.push('Buzz');
    } else {
      stringArray.push(`${i}`);
    }
  }

  return stringArray;
};

//Runtime: 75 ms, faster than 88.61% of JavaScript online submissions for Fizz Buzz.
//Memory Usage: 44.1 MB, less than 85.72% of JavaScript online submissions for Fizz Buzz.

fizzBuzz(15);
