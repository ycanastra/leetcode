/** best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  let cheapestPriceSoFar = [prices[0], 0];

  for (let i = 0; i < prices.length; i += 1) {
    if (cheapestPriceSoFar[0] > prices[i]) {
      cheapestPriceSoFar = [prices[i], i];
      console.log(cheapestPriceSoFar);
    }
    maxProfit = Math.max(maxProfit, prices[i] - prices[cheapestPriceSoFar[1]]);

  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
