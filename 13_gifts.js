// string version
const wrapGifts = (gifts) => {
  let star = "*";
  let line = star.repeat(gifts[0].length + 2) + "\n";
  let central_line = new String();
  let wrap = new String();
  for (g of gifts) {
    central_line += star + g + star + "\n";
  }
  wrap = line + central_line + line;
  return wrap;
};

// const wrapGifts = (gifts) => {
//   if (gifts.length === 0) {
//     return [];
//   }
//   let array_wrap = [];
//   let star = "*";
//   let line = star.repeat(gifts[0].length + 2);
//   array_wrap.push(line);
//   for (g of gifts) {
//     array_wrap.push(star + g + star);
//   }
//   array_wrap.push(line);
//   return array_wrap;
// };

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
