// http://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/

/*
Find the middle of a given linked list.
Given a singly linked list, find middle of the linked list. For example, if given linked list is 1->2->3->4->5 then output should be 3.

If there are even nodes, then there would be two middle nodes, we need to print second middle element. For example, if given linked list is 1->2->3->4->5->6 then output should be 4.

*/

class aNode {
  public item: number;
  public next: aNode = null;
  constructor(item: number, next?: aNode){
    this.item = item;
    this.next = next;
  }
}

function findMiddleNode(startNode: aNode): number {
  let lastNode = startNode;
  let currentNode = startNode;
  while(lastNode.next){
    currentNode = currentNode.next;
    lastNode = currentNode.next.next;
  }
  return currentNode.item;
}

// even number of nodes
// let f = new aNode(6);
// let e = new aNode(5, f);
// let d = new aNode(4, e);
// let c = new aNode(3, d);
// let b = new aNode(2, c);
// let a = new aNode(1, b);


// odd number of nodes
let e = new aNode(5);
let d = new aNode(4, e);
let c = new aNode(3, d);
let b = new aNode(2, c);
let a = new aNode(1, b);

console.log(findMiddleNode(a));
