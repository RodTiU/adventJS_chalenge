const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter) {
  // ¡Tú puedes!
  let gifts = [];
  let gift_counter = {};
  let split_string = letter.trim().split(" ");

  split_string.forEach((gift) => {
    if (gift[0] !== "_") {
      gifts.push(gift);
    }
  });

  gifts.forEach((item) => {
    if (gift_counter[item]) {
      gift_counter[item] += 1;
    } else {
      gift_counter[item] = 1;
    }
  });
  return gift_counter;
}
const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
