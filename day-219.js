//      https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1


class Solution {
    /**
    * @param number n
    * @param number m
    * @param number[][] edges

    * @returns number
    */
    shortestPath(n, m, edges) {
        const adj = Array.from({ length: n + 1 }, () => []);
        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }
        
        const dist = Array(n + 1).fill(Infinity);
        const parent = Array(n + 1).fill(-1);
        dist[1] = 0;
        
        const pq = new MinHeap();
        pq.insert([0, 1]);
        
        while (!pq.isEmpty()) {
            const [d, u] = pq.extractMin();
            
            if (d > dist[u]) continue;
            
            for (const [v, w] of adj[u]) {
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    parent[v] = u;
                    pq.insert([dist[v], v]);
                }
            }
        }
        
        if (dist[n] === Infinity) return [-1];
        
        const path = [];
        for (let v = n; v !== -1; v = parent[v]) {
            path.push(v);
        }
        path.reverse();
        path.unshift(dist[n]);
        
        return path;
    }
}
class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            
            if (element[0] >= parent[0]) break;
            
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;
            
            if (leftChildIndex < length) {
                let leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                let rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[0] < element[0]) || 
                    (swap !== null && rightChild[0] < this.heap[swap][0])
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}
