const groupBy = (collection, sort_schema) => {
  const dict_sort = {};
  if (typeof sort_schema === "function") {
    for (item of collection) {
      if (dict_sort[sort_schema(item)]) {
        dict_sort[sort_schema(item)].push(item);
      } else {
        dict_sort[sort_schema(item)] = [item];
      }
    }
  }
  if (typeof sort_schema === "string") {
    for (item of collection) {
      if (dict_sort[item[sort_schema]]) {
        dict_sort[item[sort_schema]].push(item);
      } else {
        dict_sort[item[sort_schema]] = [item];
      }
    }
  }
  return dict_sort;
};

// groupBy([{ age: 23 }, { age: 23, duration: 11 }, { age: 24 }], "age");
// groupBy(["one", "two", "three"], "length");
// groupBy(
//   [
//     { title: "JavaScript: The Good Parts", rating: 8 },
//     { title: "Aprendiendo Git", rating: 10 },
//     { title: "Clean Code", rating: 9 },
//   ],
//   "rating"
// );
// groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
// groupBy([1397639141184, 1363223700000], (timestamp) =>
//   new Date(timestamp).getFullYear()
// );
