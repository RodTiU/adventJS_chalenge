const checkIsSameTree = (tree1, tree2) => {
  const trees = [tree1, tree2];
  const structs = {};
  trees.forEach((tree, i) => {
    structs[i] = revealStructure(tree);
  });
  if (
    JSON.stringify(structs[0]) === JSON.stringify(structs[1]) ||
    JSON.stringify(structs[0]) === JSON.stringify(structs[1].reverse())
  ) {
    return true;
  }
  return false;
};

const revealStructure = (bigTree, values = []) => {
  if (bigTree !== null) {
    revealStructure(bigTree.left, values);
    values.push(bigTree.value);
    revealStructure(bigTree.right, values);
  }
  return values;
};

// const tree = {
//   value: 1,
//   left: { value: 2, left: null, right: null },
//   right: { value: 3, left: null, right: null },
// };

// console.log(checkIsSameTree(tree, tree, tree)); // true

// const tree2 = {
//   value: 1,
//   left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
//   right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
// };

// console.log(checkIsSameTree(tree, tree2)); // false
// console.log(checkIsSameTree(tree2, tree2)); // true
