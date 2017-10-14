// Check If Array Is Min Heap
// Every leaf node is a min heap as it is the smallest node that has no children
// Every branch node must be smaller than its children
// A node is an internal node if (i * 2) + 2 < N where N is size of the array
var arrMinHeap = [2, 3, 4, 5, 10, 15];
var arrNotMinHeap = [2, 10, 4, 5, 3, 15];
function isArrayMinHeap(arr, i) {
    if ((i * 2) + 2 > arr.length) {
        // leaf node
        return true;
    }
    var left = (arr[i] <= arr[(i * 2) + 1] && isArrayMinHeap(arr, (i * 2) + 1));
    var right = (2 * i + 1 == arr.length || arr[i] <= arr[(i * 2) + 2] && isArrayMinHeap(arr, (i * 2) + 2));
    return left && right;
}
console.log(isArrayMinHeap(arrMinHeap, 0) == true);
console.log(isArrayMinHeap(arrNotMinHeap, 0) == false);
