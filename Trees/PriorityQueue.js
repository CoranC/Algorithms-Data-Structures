var PriorityQueue = (function () {
    function PriorityQueue() {
        this._maxHeap = [null];
    }
    PriorityQueue.prototype.insert = function (item) {
        this._maxHeap.push(item);
        var childIndex = this._maxHeap.length - 1;
        var parentIndex = Math.floor(childIndex / 2);
        this._percolateUp(childIndex, parentIndex);
    };
    PriorityQueue.prototype.removeMax = function () {
        var max = this._maxHeap[1];
        this._maxHeap[1] = this._maxHeap.pop();
        this._percolateDown(1);
        return max;
    };
    PriorityQueue.prototype._percolateUp = function (childIndex, parentIndex) {
        while (this._maxHeap[childIndex] > this._maxHeap[parentIndex] && this._maxHeap[parentIndex] != null) {
            var temp = this._maxHeap[childIndex];
            this._maxHeap[childIndex] = this._maxHeap[parentIndex];
            this._maxHeap[parentIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor(childIndex / 2);
        }
    };
    PriorityQueue.prototype.getSize = function () {
        return this._maxHeap.length - 1;
    };
    PriorityQueue.prototype.getMax = function () {
        if (this._maxHeap.length > 2) {
            return this._maxHeap[1];
        }
        else {
            return null;
        }
    };
    PriorityQueue.prototype._getLargestChildIndex = function (nodeIndex) {
        if (this._maxHeap[nodeIndex * 2] > this._maxHeap[(nodeIndex * 2) + 1]) {
            return nodeIndex * 2;
        }
        else {
            return (nodeIndex * 2) + 1;
        }
    };
    PriorityQueue.prototype._percolateDown = function (nodeIndex) {
        var largestChildIndex = this._getLargestChildIndex(nodeIndex);
        while (this._maxHeap[nodeIndex] < this._maxHeap[largestChildIndex]) {
            console.log("Node Index: " + nodeIndex + " is " + this._maxHeap[nodeIndex]);
            console.log("Largest Child Index: " + largestChildIndex + " is " + this._maxHeap[largestChildIndex]);
            var temp = this._maxHeap[nodeIndex];
            this._maxHeap[nodeIndex] = this._maxHeap[largestChildIndex];
            this._maxHeap[largestChildIndex] = temp;
            nodeIndex = largestChildIndex;
            largestChildIndex = this._getLargestChildIndex(nodeIndex);
        }
    };
    PriorityQueue.prototype.printHeap = function () {
        console.log(this._maxHeap);
    };
    return PriorityQueue;
}());
var pq = new PriorityQueue();
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
*/
var arr = [99, 24, 15, 63, 32, 25, 65, 87, 89, 21, 11, 102, 53];
function getMinimumKElements(arr, k) {
    var pq = new PriorityQueue();
    for (var i = 0; i < arr.length; i++) {
        if (pq.getMax() == null) {
            pq.insert(arr[i]);
        }
        else if (pq.getSize() < k) {
            pq.insert(arr[i]);
        }
        else if (arr[i] < pq.getMax()) {
            pq.removeMax();
            pq.insert(arr[i]);
        }
    }
    return pq.printHeap();
}
console.log("\nIn an integer array with N elements (N is large), find the minimum k elements (k << N).");
console.log(arr);
getMinimumKElements(arr, 4);
