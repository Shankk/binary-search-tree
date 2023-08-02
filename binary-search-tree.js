class Tree {
    constructor(array = []) {
        this.array = array
    }

    buildTree(array = [], start = 0, end = (array.length-1)) {
        if(start>end) return null
        let mid = (start+end)/2
        let root = new Node(array[mid]) 

        root.setLeft(this.buildTree(array,start,mid-1))
        root.setRight(this.buildTree(array,mid+1,end))

        return root
    }
} 

class Node {
    constructor(root = null ,leftChild = null,rightChild = null) {
        this.root = root
        this.leftChild = leftChild
        this.rightChild = rightChild
    }

    setRoot(value) {
        this.root = value
    }

    setLeft(value) {
        this.leftChild = value
    }
    setRight(value) {
        this.rightChild = value
    }
}

module.exports = Tree