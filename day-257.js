//      https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1



class Solution {
    /**
    * @param number n
    * @param number m
    * @param number src
    * @param number[][] edges

    * @returns number[]
    */
    shortestPath(edges, n, m, src) {
        const g = new Map();
        
        // Build the graph
        for (const [u, v] of edges) {
            if (!g.has(u)) g.set(u, []);
            if (!g.has(v)) g.set(v, []);
            g.get(u).push(v);
            g.get(v).push(u);
        }
        
        const visited = new Set([src]);
        let q = [src];
        const ans = Array(n).fill(-1);
        let d = 0;

        while (q.length > 0) {
            const nq = [];
            for (const e of q) {
                ans[e] = d;
                for (const nbr of g.get(e) || []) {
                    if (!visited.has(nbr)) {
                        nq.push(nbr);
                        visited.add(nbr);
                    }
                }
            }
            q = nq;
            d += 1;
        }
        
        return ans;
    }

}