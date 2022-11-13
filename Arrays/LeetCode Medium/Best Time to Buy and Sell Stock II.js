/**
 * @param {number[]} prices
 * @return {number}
 */

//Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

//Time Complexity: O(n)
//Space Complexity: O(1)

const maxProfit = function (prices) {
  let minimum = prices[0];
  let profits = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
    }

    if (prices[i] - minimum > 0) {
      profits = profits + prices[i] - minimum;
      minimum = prices[i];
    }
  }
  return profits;
};

//Runtime: 128 ms, faster than 8.84% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
//Memory Usage: 41.8 MB, less than 95.67% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);

//IN PROGRESS

///
//////
///////

// let buyDay = Math.min(...prices);
// for (let i = prices.indexOf(buyDay) + 1; i <= prices.length; i++) {
//   console.log(prices[i]);
//   if (prices.indexOf(buyDay) === prices.length) console.log(0);
//   if (prices[i] > prices[i + 1]) {
//     console.log(prices[i] - buyDay);
//     buyDay = prices[i + 1];
//   }
// }
