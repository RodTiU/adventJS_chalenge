const canMouseEat = (direction, game) => {
  let position_mouse = [];
  let position_food = [];
  for (let i = 0, len = game[0].length; i < len; i++) {
    for (let j = 0, len = game.length; j < len; j++) {
      if (game[i][j] === "m") {
        position_mouse = [i, j];
      }
      if (game[i][j] === "*") {
        if (position_food) {
          position_food.push([i, j]);
        } else {
          position_food = [[i, j]];
        }
      }
    }
  }
  if (direction === "up") {
    position_mouse[0] -= 1;
  } else if (direction === "down") {
    position_mouse[0] += 1;
  } else if (direction === "right") {
    position_mouse[1] += 1;
  } else if (direction === "left") {
    position_mouse[1] -= 1;
  }

  for (food of position_food) {
    if (JSON.stringify(food) === JSON.stringify(position_mouse)) {
      return true;
    }
  }
  return false;
};

// const room = [
//   [" ", " ", " "],
//   [" ", " ", "m"],
//   [" ", " ", "*"],
// ];

// console.log(canMouseEat("up", room)); // false
// console.log(canMouseEat("down", room)); // true
// console.log(canMouseEat("right", room)); // false
// console.log(canMouseEat("left", room)); // false

// const room2 = [
//   ["*", " ", " ", " "],
//   [" ", "m", "*", " "],
//   [" ", " ", " ", " "],
//   [" ", " ", " ", "*"],
// ];

// console.log(canMouseEat("up", room2)); // false
// console.log(canMouseEat("down", room2)); // false
// console.log(canMouseEat("right", room2)); // true
// console.log(canMouseEat("left", room2)); // false
