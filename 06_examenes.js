const sumPairs = (array, expected_sum) => {
  for (let i = 0, len = array.length; i < len - 1; i++) {
    for (let j = i + 1, len = array.length; j < len; j++) {
      if (expected_sum === array[i] + array[j]) {
        return [array[i], array[j]];
      }
    }
  }
  return null;
};

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
