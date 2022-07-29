const checkSledJump = (heights) => {
  let bottom_trip;
  let change_direction_index;
  for (let i = 0, len = heights.length; i < len; i++) {
    if (heights[i] >= heights[i + 1]) {
      change_direction_index = i;
      break;
    }
  }
  if (!change_direction_index) {
    return false;
  }
  bottom_trip = heights.slice(change_direction_index);
  for (let i = 0, len = bottom_trip.length; i < len; i++) {
    if (bottom_trip[i] < bottom_trip[i + 1]) {
      return false;
    }
  }
  return true;
};

// console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
// console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
// console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
// console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

// console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
// console.log(checkSledJump([1, 2, 3])); // false: sólo sube
// console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
