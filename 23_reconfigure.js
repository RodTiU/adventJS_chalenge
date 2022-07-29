const canReconfigure = (from, to) => {
  const to_dict = {};
  const from_dict = {};
  const from_set = [...new Set(from)];
  let count_coincidence = 0;
  if (from.length !== to.length) {
    return false;
  }
  to.split("").map((value) => {
    if (value === from_set[0]) {
      count_coincidence++;
    }
  });
  if (from_set.length === 1 && count_coincidence !== to.length) {
    return false;
  }
  to.split("").forEach((c, i) => {
    if (to_dict[c]) {
      to_dict[c].push(i);
    } else {
      to_dict[c] = [i];
    }
  });
  from.split("").forEach((c, i) => {
    if (from_dict[c]) {
      from_dict[c].push(i);
    } else {
      from_dict[c] = [i];
    }
  });
  for ([key, value] of Object.entries(to_dict)) {
    if (from_dict[key] && value.join() === from_dict[key].join()) {
      return true;
    } else if (
      from_dict[key] &&
      value.join() !== from_dict[key].join() &&
      value.length > 1
    ) {
      return false;
    } else if (!from_dict[key] && value.length <= 1) {
      return true;
    }
  }
};
//[false, true, false, true, false, false]
console.log(canReconfigure("XBOX", "XXBO"));
// const from = 'XBOX'
// const to   = 'XXBO'
// canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// X -> X
// B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra)
// O -> B
// X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
// */

console.log(canReconfigure("BAL", "LIB"));

// const from = 'BAL'
// const to   = 'LIB'
// canReconfigure(from, to) // true
// /* la transformación sería así:
// B -> L
// A -> I
// L -> B
// */

console.log(canReconfigure("COIN", "JUU"));
// const from = 'CON'
// const to   = 'JUU'
// canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// C -> J
// O -> U
// N -> FALLO
// */

// const from = 'XBOX'
// const to   = 'XOBX'
console.log(canReconfigure("XBOX", "XOBX")); // true

// const from = 'MMM'
// const to   = 'MID'
console.log(canReconfigure("MMM", "MID")); // false
// /* no se puede hacer la transformación:
// M -> M (BIEN, asigna el mismo carácter a si mismo)
// M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
// M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
// */

// const from = "AA";
// const to = "MID";
console.log(canReconfigure("AA", "MID")); // false -> no tiene la misma longitud
