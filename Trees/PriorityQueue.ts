class PriorityQueue {
  private _maxHeap: number[] = [null];  
  constructor(){}
  
  insert(item: number){
    this._maxHeap.push(item);
    let childIndex = this._maxHeap.length - 1;
    let parentIndex = Math.floor(childIndex / 2);
    this._percolateUp(childIndex, parentIndex);
  }

  removeMax(): number {
    let max = this._maxHeap[1];
    this._maxHeap[1] = this._maxHeap.pop();
    this._percolateDown(1);
    return max;
  }

  private _percolateUp(childIndex: number, parentIndex: number): void{
    while(this._maxHeap[childIndex] > this._maxHeap[parentIndex] && this._maxHeap[parentIndex] != null){
      let temp = this._maxHeap[childIndex];
      this._maxHeap[childIndex] = this._maxHeap[parentIndex];
      this._maxHeap[parentIndex] = temp;
      childIndex = parentIndex;
      parentIndex = Math.floor(childIndex / 2);
    }
  }
  
  getSize(){
    return this._maxHeap.length - 1;
  }
  getMax(){
    if(this._maxHeap.length > 2){
      return this._maxHeap[1];
    }else{
      return null;
    }
  }

  private _getLargestChildIndex(nodeIndex: number): number {
    if(this._maxHeap[nodeIndex*2] > this._maxHeap[(nodeIndex*2) + 1]){
      return nodeIndex*2;
    }else{
      return (nodeIndex*2) + 1;
    }
  }

  private _percolateDown(nodeIndex: number): void{
    let largestChildIndex = this._getLargestChildIndex(nodeIndex);
    while(this._maxHeap[nodeIndex] < this._maxHeap[largestChildIndex]){
      console.log(`Node Index: ${nodeIndex} is ${this._maxHeap[nodeIndex]}`);
      console.log(`Largest Child Index: ${largestChildIndex} is ${this._maxHeap[largestChildIndex]}`);
      let temp = this._maxHeap[nodeIndex];
      this._maxHeap[nodeIndex] = this._maxHeap[largestChildIndex];
      this._maxHeap[largestChildIndex] = temp;
      nodeIndex = largestChildIndex;
      largestChildIndex = this._getLargestChildIndex(nodeIndex);
    }
  }

  printHeap(){
    console.log(this._maxHeap);
  }
}

let pq = new PriorityQueue();
pq.insert(35);
pq.insert(26);
pq.insert(33);
pq.insert(15);
pq.insert(24);
pq.insert(5);
pq.insert(4);
pq.insert(12);
pq.insert(1);
pq.insert(23);
pq.insert(21);
pq.insert(2);

pq.insert(34);
pq.printHeap();
console.log("Max is: " + pq.removeMax());
pq.printHeap();


/*
Example Question:
  In an integer array with N elements (N is large), find the minimum k elements (k << N).
  reference: http://www.ardendertat.com/2011/05/30/my-favorite-interview-question/
*/

let arr = [99, 24, 15, 63, 32, 25, 65, 87, 89, 21, 11, 102, 53];

function getMinimumKElements(arr: number[], k: number) {
  let pq = new PriorityQueue();
  for(var i = 0; i < arr.length; i++){
    if(pq.getMax() == null){
      pq.insert(arr[i]);
    }else if(pq.getSize() < k){
      pq.insert(arr[i]);
    }else if(arr[i] < pq.getMax()){
      pq.removeMax();
      pq.insert(arr[i]);
    }
  }
  return pq.printHeap();
}

console.log("\nIn an integer array with N elements (N is large), find the minimum k elements (k << N).");
console.log(arr);
getMinimumKElements(arr, 4);