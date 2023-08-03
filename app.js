const Tree = require('./binary-search-tree')

const sorted = [1,2,3,4,5,6,7,13,14,15,18,20]
const bst = new Tree(sorted)
bst.tree = bst.buildTree(bst.array, 0, bst.array.length-1)

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
//console.log(bst.find(9))
//bst.remove(7)
prettyPrint(bst.tree)
//console.log(bst.locateLeaf(8))