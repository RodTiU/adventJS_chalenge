const shouldBuyFidelity = (times) => {
  let regular = 12 * times;
  let fidelity = 250;
  for (let i = 1, len = times; i <= len; i++) {
    fidelity += 12 * 0.75 ** i;
  }
  if (fidelity > regular) {
    return false;
  }
  return true;
};

console.log(shouldBuyFidelity(100));
