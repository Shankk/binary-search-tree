const Tree = require('./binary-search-tree')

const myArray = [23,14,6,8,68,56,43,12,12,68]
const bst = new Tree(myArray)
//bst.tree = bst.buildTree(bst.array, 0, bst.array.length-1)

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.root}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(bst.tree)