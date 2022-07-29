const decodeNumbers = (symbols) => {
  dict_symbols = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  operations = 0;
  i = 0;
  for (sym of symbols) {
    if (dict_symbols[sym] < dict_symbols[symbols[i + 1]]) {
      operations -= dict_symbols[sym];
      // continue;
    } else {
      operations += dict_symbols[sym];
    }
    i++;
  }
  return operations;
};

// decodeNumbers("..."); // 3
// decodeNumbers(".,"); // 4 (5 - 1)
// decodeNumbers(",."); // 6 (5 + 1)
// decodeNumbers(",..."); // 8 (5 + 3)
// decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
// decodeNumbers(".;"); // 49 (50 - 1)
// decodeNumbers("..,"); // 5 (-1 + 1 + 5)
// decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
// decodeNumbers(".;!"); // 49 (-1 -50 + 100)
// decodeNumbers("!!!"); // 300
// decodeNumbers(";!"); // 50
// decodeNumbers(";.W"); // NaN
