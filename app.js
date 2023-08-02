const Tree = require('./binary-search-tree')

const sorted = [1,2,3,4,5,6,7]
const bst = new Tree(sorted)

console.log(bst.buildTree(bst.array))