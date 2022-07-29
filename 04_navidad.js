const create_tree = (tree_size = 5, trunk_height = 2) => {
  let tree = new String();
  for (let i = 0, len = tree_size; i < len + trunk_height; i++) {
    let line = "_";
    let star = "*";
    let trunk = "#";

    if (i < tree_size) {
      tree +=
        line.repeat(len - i - 1) +
        star.repeat(2 * i + 1) +
        line.repeat(len - i - 1) +
        "\n";
    } else {
      tree += line.repeat(len - 1) + trunk + line.repeat(len - 1) + "\n";
    }
  }
  return tree;
};

console.log(create_tree(10));
