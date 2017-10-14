class Queue {
    constructor() {
        this._queue = [];
        this.getSize = () => {
            return this._queue.length;
        };
        this.enqueue = (item) => {
            this._queue.push(item);
        };
        this.dequeue = () => {
            return this._queue.shift();
        };
    }
}
function bfs(graph, start, end) {
    let queue = new Queue();
    let visited = new Set();
    let current;
    queue.enqueue(start);
    while (queue.getSize() > 0) {
        current = queue.dequeue();
        console.log(`Checking ${current} == ${end}`);
        if (current == end) {
            return true;
        }
        if (visited.has(current)) {
            continue;
        }
        visited.add(current);
        let currentNeighbours = graph.get(current);
        for (let i = 0; i < currentNeighbours.length; i++) {
            queue.enqueue(currentNeighbours[i]);
        }
    }
    return false;
}
let undirected_1 = new Map([
    [0, [1]], [1, [0, 2, 3]], [2, [1, 6]], [3, [1, 5]], [4, [7]], [5, [3]], [6, [2]],
    [7, [4]]
]);
let undirected_2 = new Map([
    [0, [1]], [1, [0, 2]], [2, [1, 3]], [3, [2, 4]], [4, [3]]
]);
let directed_1 = new Map([
    [0, [1]], [1, [2, 4]], [2, [1, 4]], [3, [1, 5]], [4, [2]], [5, [3]], [6, [2, 7]],
    [7, []]
]);
console.log(bfs(undirected_1, 0, 6) == true);
console.log(bfs(undirected_1, 0, 8) == false);
console.log(bfs(undirected_2, 0, 4) == true);
console.log(bfs(undirected_2, 0, 6) == false);
console.log(bfs(directed_1, 6, 4) == true);
console.log(bfs(directed_1, 0, 7) == false);
