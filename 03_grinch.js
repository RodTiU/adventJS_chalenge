strings = [
  "bici coche (balón) bici coche peluche",
  "(muñeca) consola bici",
  "bici coche (balón bici coche",
  "peluche (bici [coche) bici coche balón",
  "(peluche {) bici",
  "() bici",
];

function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  first_condition = /\(.+\)/;
  second_condition = /{|}|\[|\]/;

  if (
    first_condition.test(letter) &&
    !second_condition.test(letter.match(first_condition)[0])
  ) {
    return true;
  } else return false;
}

console.log(isValid(strings[0]));
