const getMinJump = (obstacles) => {
  let count;
  for (let i = 1, len = 10; i <= len; i++) {
    count = 0;
    for (obs of obstacles) {
      if (obs % i !== 0) {
        count++;
      }
      if (count === obstacles.length) {
        return i;
      }
    }
  }
};
// const obstacles = [5, 3, 6, 7, 9];
// console.log(getMinJump(obstacles)); // -> 4

// // S es salto, X es obstáculo
// /* Así quedaría la representación:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  .  X  .  X  X  X  .  X  .
// S-----------S-----------S-------
// */

// const obstacles = [2, 4, 6, 8, 10];
// console.log(getMinJump(obstacles)); // -> 7

// /* Así quedaría la representación:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  X  .  X  .  X  .  X  .  X
// S--------------------S---------

// // Longitudes de salto:
// // 1 caería en el 2
// // 2 caería en el 2
// // 3 caería en el 6
// // 4 caería en el 4
// // 5 caería en el 10
// // 6 caería en el 6
// // 7 es el ideal!!! ✅

// getMinJump([1, 2, 3, 5]); // -> 4
// getMinJump([3, 7, 5]); // -> 2
// getMinJump([9, 5, 1]); // -> 2
// */
