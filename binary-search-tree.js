class Tree {
    constructor(arr = []) {
        this.array = [...new Set(arr.sort((a, b) => a - b))];
        this.tree = this.buildTree(this.array)
    }

    rebalance() {
        this.array = this.inorder(this.tree)
        return this.tree = this.buildTree(this.array, 0, this.array.length-1)
    }

    isBalanced(node) {
        if(node == null) return -1
        
        let lh = this.height(node.leftChild)
        let rh = this.height(node.rightChild)
        
        console.log("LH: "+lh + " RH: " +rh)
        let result = lh - rh
        if(result > 1 || result < -1) {
            console.log("Not Balanced")
        }
        else {
            console.log("Is Balanced")
        }
    }

    height(node) {
        if(node == null) return -1

        let lh = this.height(node.leftChild)
        let rh = this.height(node.rightChild)
        return lh > rh ? lh + 1 : rh + 1        
    }

    depth(node, root = this.tree ,level = 0) {
        if(node == null || this.tree == null) return
        if(root.value == node.value) return level
        
        if(node.value < root.value) {
            return this.depth(node, root.leftChild, level+1)
        }
        else {
            return this.depth(node, root.rightChild, level+1)
        }
        
    }

    levelOrder(node, array = []) {
        if(node == null) return
        let queue = []
        queue.push(node)
        while(queue.length > 0) {
            let current = queue[0]
            queue.shift()
            array.push(current.value)
            if(current.leftChild != null) queue.push(current.leftChild)
            if(current.rightChild != null) queue.push(current.rightChild)

        }

        return array
    }

    inorder(node, array = []) {
        if (node !== null) {
            this.inorder(node.leftChild, array);
            array.push(node.value);
            this.inorder(node.rightChild, array);
        }

        return array
    }
    preorder(node, array = []) {
        if (node !== null) {
            array.push(node.value);
            this.inorder(node.leftChild, array);
            this.inorder(node.rightChild, array);
        }
        
        return array
    }
    postorder(node, array = []) {
        if (node !== null) {
            this.inorder(node.leftChild, array);
            this.inorder(node.rightChild, array);
            array.push(node.value);
        }
        
        return array
    }

    buildTree(array = [], start = 0, end = array.length - 1) {
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
            if(value > node.value && node.rightChild != null) {
                node = node.rightChild
             
            }
            else if(value < node.value && node.leftChild != null) {
                node = node.leftChild
            }
            else if(value == node.value){
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
            if(value > node.value && node.rightChild != null) {
                node = node.rightChild
            }
            else if(value < node.value && node.leftChild != null) {
                node = node.leftChild
            }
            else if(value == node.value){
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
        if(value > item.value) item.rightChild = new Node(value)
        if(value < item.value) item.leftChild = new Node(value)
    }

    remove(value) {
        let item = this.find(value)
        if(item == null) return item
        // if no children, we delete it
        if(item.rightChild == null && item.leftChild == null){
            return item = null;
        }
        // only has rightchild, we replace it with rightchild
        else if(item.leftChild == null) {
            item.value = item.rightChild.value
            item.rightChild = null
        }
        // only has leftchild, we replace it with left child
        else if(item.rightChild == null) { 
            item.value = item.leftChild.value
            item.leftChild = null
        }
        //has both children, we search for next best to take over
        else { 
            let succParent = item
            // Find successor
            let succ = item.rightChild;
            while (succ.leftChild !== null) {
                succParent = succ;
                succ = succ.leftChild;
            }
            // Delete successor.  Since successor is always left child of its parent
            // we can safely make successor's right child as left of its parent.
            // If there is no succ, then assign succ.right to succParent.right
            if (succParent !== item) {
                succParent.leftChild = succ.rightChild;
            } else {
                succParent.rightChild = succ.rightChild;
            }
            // Copy Successor Data to root
            item.value = succ.value;
            return item;
        }
    }
} 

class Node {
    constructor(value = null ,leftChild = null,rightChild = null) {
        this.value = value
        this.leftChild = leftChild
        this.rightChild = rightChild
    }

    setValue(value) {
        this.value = value
    }

    setLeft(value) {
        this.leftChild = value
    }
    setRight(value) {
        this.rightChild = value
    }
}

module.exports = Tree