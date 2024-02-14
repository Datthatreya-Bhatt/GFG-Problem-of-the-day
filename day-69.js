//  https://www.geeksforgeeks.org/problems/critical-connections/1


class Solution {
    criticalConnections(v, adj) {
       let time = [0];
       let low = new Array(v).fill(Number.MAX_SAFE_INTEGER);
       let disc = new Array(v).fill(Number.MAX_SAFE_INTEGER);
       let parent = new Array(v).fill(-1);
       let visited = new Array(v).fill(false);
       let ans = [];

        function Articulation_Point(u) {
        low[u] = time[0];
        disc[u] = time[0];
        time[0]++;
        visited[u] = true;
        for (let i = 0; i < adj[u].length; i++) {
            let vertex = adj[u][i];
            if (!visited[vertex]) {
                parent[vertex] = u;
                Articulation_Point(vertex);
                low[u] = Math.min(low[u], low[vertex]);
                if (low[vertex] > disc[u]) {
                    ans.push([u, vertex].sort((a,b)=> a-b));
                }
            } else if (parent[u] !== vertex) {
                low[u] = Math.min(low[u], disc[vertex]);
            }
        }
    }

    for (let i = 0; i < v; i++) {
        if (!visited[i]) {
            Articulation_Point(i);
        }
    }

    return ans.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }
}
