const getCoins = (change) => {
  const coins = [1, 2, 5, 10, 20, 50];
  let change_remaining = change;
  let change_array = new Array(coins.length).fill(0);
  let coin_used;
  let number_coins;
  let index;

  while (true) {
    for (let i = 0, len = coins.length; i < len; i++) {
      if (coins[i] > change_remaining) {
        coin_used = coins[i - 1];
        index = i - 1;
        break;
      } else if (coins[len - 1] <= change_remaining) {
        coin_used = coins[len - 1];
        index = len - 1;
        break;
      }
    }

    number_coins = Math.floor(change_remaining / coin_used);
    change_remaining -= number_coins * coin_used;
    change_array[index] = number_coins;
    if (change_remaining === 0) {
      return change_array;
    }
  }
};

console.log(getCoins(55));
