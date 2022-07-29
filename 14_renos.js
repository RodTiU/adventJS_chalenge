const missingReindeer = (ids) => {
  ids.sort((a, b) => {
    return a - b;
  });
  let i = 0;
  for (id of ids) {
    if (id !== i) {
      return i;
    }
    i++;
  }
  return i;
};

// console.log(missingReindeer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(missingReindeer([0, 2, 3])); // -> 1
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
// console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
// console.log(missingReindeer([3, 0, 1])); // -> 2
// console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
// console.log(missingReindeer([0]));
