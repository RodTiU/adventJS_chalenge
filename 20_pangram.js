const pangram = (letter) => {
  const letter_set = [...new Set(letter.toLowerCase())].sort();
  const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  for (c of alphabet) {
    if (!letter_set.includes(c)) {
      return false;
    }
  }
  return true;
};

// console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
// console.log(
//   pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
// ); // true

// console.log(
//   pangram(
//     "Esto es una frase larga pero no tiene todas las letras del abecedario"
//   )
// ); // false
// console.log(pangram("De la a a la z, nos faltan letras")); // false
