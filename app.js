const Tree = require('./binary-search-tree')

const myArray = [23,14,6,8,56,43,12,12,68]
const bst = new Tree(myArray)
//bst.tree = bst.buildTree(bst.array, 0, bst.array.length-1)

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


prettyPrint(bst.tree)
bst.isBalanced(bst.tree)
console.log(bst.levelOrder(bst.tree))
console.log(bst.preorder(bst.tree))
console.log(bst.postorder(bst.tree))
console.log(bst.inorder(bst.tree))
bst.insert(47)
bst.insert(26)
bst.insert(35)
bst.insert(52)
prettyPrint(bst.tree)
bst.isBalanced(bst.tree)
bst.rebalance()
prettyPrint(bst.tree)
bst.isBalanced(bst.tree)
console.log(bst.levelOrder(bst.tree))
console.log(bst.preorder(bst.tree))
console.log(bst.postorder(bst.tree))
console.log(bst.inorder(bst.tree))