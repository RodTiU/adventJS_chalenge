const maxProfit = (prices) => {
  const prices_profit = {};
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    let last_price = 0;
    for (let j = i + 1, len = prices.length; j < len; j++) {
      let price_diff = prices[j] - prices[i];
      if (price_diff > last_price) {
        prices_profit[prices[i]] = [price_diff, prices[j]];
      }
      last_price = price_diff;
    }
  }
  try {
    const [buy_price, [revenue, sell_price]] =
      Object.entries(prices_profit).shift();
    return `${revenue} (compra a ${buy_price}, vende a ${sell_price})`;
  } catch {
    return "-1 (no hay ganancia posible)";
  }
};

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
