// Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g. if you have a tree with depth D, you'll have D linked lists)

class BSTNode {
  constructor(public item?: number, public left?: BSTNode, public right?: BSTNode) {};
  
  getItem(){
    return this.item;
  }

  printItem(){
    console.log(this.item);
  }

  hasItem(item: number): boolean {
    if(item == this.item){
      return true;
    }else if(item < this.item && this.left){
      return this.left.hasItem(item);
    }else if(item > this.item && this.right){
      return this.right.hasItem(item);
    }
    return false;
  }

  insert(item: number): void{
    if(this.item == null){
      this.item = item;
    }
    if(item < this.item){
      if(this.left){
        this.left.insert(item);
      }else{
        this.left = new BSTNode(item);
      }
    }else if(item > this.item){
      if(this.right){
        this.right.insert(item);
      }else{
        this.right = new BSTNode(item);
      }
    }
  }

  inOrder(): void {
    if(this.left){
      this.left.inOrder();
    }
    this.printItem();
    if(this.right){
      this.right.inOrder();
    }
  }

  preOrder(): void {
    this.printItem();
    if(this.left){
      this.left.preOrder();
    }
    if(this.right){
      this.right.preOrder();
    }
  }

  postOrder(): void {
    if(this.left){
      this.left.postOrder();
    }
    if(this.right){
      this.right.postOrder();
    }
    this.printItem();    
  }
}

class aNode {
  public item: number;
  public next: aNode = null;
  constructor(item: number, next?: aNode){
    this.item = item;
    this.next = next;
  }
}

function createLinkedListsFromBSTLevels(root: BSTNode, memo: Map<number, aNode>, 
    level: number): void {
  if(root == null){
    return;
  }
  let theNode: aNode;
  if(memo.has(level)){
    console.log(`Called with ${root.item}`);
    theNode = memo.get(level);
    while(theNode.next != null){
      theNode = theNode.next;
    }
    theNode.next = new aNode(root.item);
    console.log(`Node is ${root.item}`);
  }else{
    theNode = new aNode(root.item);
    memo.set(level, theNode);
  }
  createLinkedListsFromBSTLevels(root.left, memo, level + 1);
  createLinkedListsFromBSTLevels(root.right, memo, level + 1);
}

let bst = new BSTNode();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(5);
bst.insert(7);

let a: Map<number, aNode> = new Map<number, aNode>();
createLinkedListsFromBSTLevels(bst, a, 0);
console.log(a);
let n = a.get(2);
while(n){
  console.log(n.item);
  n = n.next;
}