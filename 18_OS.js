const fixFiles = (files) => {
  let count;
  for (let i = 0, len = files.length; i < len - 1; i++) {
    count = 0;
    for (let j = i + 1, len = files.length; j < len; j++) {
      if (files[i] === files[j]) {
        files[j] = files[j] + `(${++count})`;
      }
    }
  }
  return files;
};

// const files = ["photo", "postcard", "photo", "photo", "video"];
// console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

// const files2 = ["file", "file", "file", "game", "game"];
// console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
// const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
// console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
