//  https://www.geeksforgeeks.org/problems/possible-paths--141628/1





class Solution {
    /**
    * @param number n
    * @param number[][] edges
    * @param number q
    * @param number[] queries
    
    * @returns number[]
    */
      maximumWeight(n, edges, q, queries) {
        let uf = Array(n).fill(0).map((_, i) => i);
        let sz = Array(n).fill(1);
    
        function find(u) {
          if (uf[u] !== u) {
            uf[u] = find(uf[u]);
          }
          return uf[u];
        }
    
        edges.sort((a, b) => b[2] - a[2]);
        queries = queries.map((value, index) => [index, value]);
        queries.sort((a, b) => a[1] - b[1]);
    
        let res = Array(q).fill(0);
        let cur = 0;
    
        for (let [ind, x] of queries) {
          while (edges.length && edges[edges.length - 1][2] <= x) {
            let [u, v, _] = edges.pop();
            u = find(u - 1);
            v = find(v - 1);
            if (u !== v) {
              uf[u] = v;
              cur += sz[u] * sz[v];
              sz[v] += sz[u];
            }
          }
          res[ind] = cur;
        }
    
        return res;
    }
            
    
    }
    