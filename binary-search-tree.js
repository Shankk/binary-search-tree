class Tree {
    constructor(array = []) {
        this.array = array
        this.tree = null
    }

    buildTree(array = [], start, end) {
        if(start>end) return null
        let mid = Math.floor((start+end)/2)
        let root = new Node(array[mid]) 

        root.setLeft(this.buildTree(array,start,mid-1))
        root.setRight(this.buildTree(array,mid+1,end))

        return root
    }

    find(value) {
        if(this.tree === null) return null
        let node = this.tree
        while(value != null) {
            if(value > node.root && node.rightChild != null) {
                node = node.rightChild
             
            }
            else if(value < node.root && node.leftChild != null) {
                node = node.leftChild
            }
            else if(value == node.root){
                return node
            }
            else {
                return null
            }
        }
    }

    locateLeaf(value) {
        if(this.tree === null) return null
        let node = this.tree
        while(value != null) {
            if(value > node.root && node.rightChild != null) {
                node = node.rightChild
            }
            else if(value < node.root && node.leftChild != null) {
                node = node.leftChild
            }
            else if(value == node.root){
                return null
            }
            else {
                return node
            }
        }
    }

    insert(value) {
        let item = this.locateLeaf(value)
        if(item == null) return null
        if(value > item.root) item.rightChild = new Node(value)
        if(value < item.root) item.leftChild = new Node(value)
    }

    remove(value) {
        let item = this.find(value)
        if(item == null) return null
        // FIX THIS: has both children, we search for next best to take over
        if(item.rightChild != null && item.leftChild != null){
            
        }
        // only has rightchild, we replace it with rightchild
        else if(item.rightChild != null && item.leftChild == null) {
            item.root = item.rightChild.root
            item.rightChild = null
        }
        // only has leftchild, we replace it with left child
        else if(item.rightChild == null && item.leftChild != null) { 
            item.root = item.leftChild.root
            item.leftChild = null
        }
        // if no children, we delete it
        else { 
            return item = null
        }
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