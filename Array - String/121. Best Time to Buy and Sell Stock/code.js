/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {

  let lowestPrice = prices[0];  // Começa com o primeiro valor
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < lowestPrice) {
          // Atualiza o menor preço
          lowestPrice = prices[i];
      } else {
          // Calcula o lucro se vender neste dia
          let profit = prices[i] - lowestPrice;
          // Atualiza o lucro máximo se for maior
          if (profit > maxProfit) {
              maxProfit = profit;
          }
      }
  }

  return maxProfit;
};
