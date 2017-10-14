var BSTNode = (function () {
    function BSTNode(item, left, right) {
        this.item = item;
        this.left = left;
        this.right = right;
    }
    ;
    BSTNode.prototype.getItem = function () {
        return this.item;
    };
    BSTNode.prototype.printItem = function () {
        console.log(this.item);
    };
    BSTNode.prototype.hasItem = function (item) {
        if (item == this.item) {
            return true;
        }
        else if (item < this.item && this.left) {
            return this.left.hasItem(item);
        }
        else if (item > this.item && this.right) {
            return this.right.hasItem(item);
        }
        return false;
    };
    BSTNode.prototype.insert = function (item) {
        if (this.item == null) {
            this.item = item;
        }
        if (item < this.item) {
            if (this.left) {
                this.left.insert(item);
            }
            else {
                this.left = new BSTNode(item);
            }
        }
        else if (item > this.item) {
            if (this.right) {
                this.right.insert(item);
            }
            else {
                this.right = new BSTNode(item);
            }
        }
    };
    BSTNode.prototype.inOrder = function () {
        if (this.left) {
            this.left.inOrder();
        }
        this.printItem();
        if (this.right) {
            this.right.inOrder();
        }
    };
    BSTNode.prototype.preOrder = function () {
        this.printItem();
        if (this.left) {
            this.left.preOrder();
        }
        if (this.right) {
            this.right.preOrder();
        }
    };
    BSTNode.prototype.postOrder = function () {
        if (this.left) {
            this.left.postOrder();
        }
        if (this.right) {
            this.right.postOrder();
        }
        this.printItem();
    };
    return BSTNode;
}());
var bst = new BSTNode();
bst.insert(8);
bst.insert(6);
bst.insert(10);
bst.insert(5);
bst.insert(7);
bst.insert(9);
bst.insert(11);
console.log("\nIn order");
bst.inOrder();
console.log("\nPre order");
bst.preOrder();
console.log("\nPost order");
bst.postOrder();
console.log("\nHas 99");
console.log(bst.hasItem(99));
console.log("\nHas 11");
console.log(bst.hasItem(11));
// Find the smallest element in a binary search tree
function getSmallestElement(rootNode) {
    while (rootNode.left) {
        rootNode = rootNode.left;
    }
    return rootNode.item;
}
console.log("\nFind the smallest element in a binary search tree");
console.log(getSmallestElement(bst));
// Find the second largest in a binary search tree
function getSecondLargestElement(rootNode) {
    var parent;
    while (rootNode.right) {
        parent = rootNode;
        rootNode = rootNode.right;
    }
    return parent.item;
}
console.log("\nFind the second largest in a binary search tree");
console.log(getSecondLargestElement(bst));
// Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height.
function createMinimalBST(arr, start, end) {
    if (end < start) {
        return null;
    }
    var mid = Math.floor((start + end) / 2);
    var root = new BSTNode();
    root.item = arr[mid];
    root.left = createMinimalBST(arr, start, mid - 1);
    root.right = createMinimalBST(arr, mid + 1, end);
    return root;
}
console.log("\nGiven a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.");
var myArr = [1, 2, 3, 4, 5, 6, 7, 8];
var bst2 = createMinimalBST(myArr, 0, myArr.length - 1);
bst2.inOrder();
console.log("*");
bst2.postOrder();
// Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g. if you have a tree with depth D, you'll have D linked lists)
