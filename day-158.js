//      https://www.geeksforgeeks.org/problems/number-of-good-components--170647/1

class Solution {
  /**
    * @param number e
    * @param number v
    * @param number[][] edges

    * @returns number
    */

  dfs(node) {
    this.vis[node] = 1;
    this.sz += 1;
    for (let it of this.graph[node]) {
      if (!this.vis[it]) {
        this.dfs(it);
      }
    }
  }
  ok(node, sz) {
    this.chk[node] = 1;
    if (this.graph[node].length !== sz - 1) {
      return false;
    }
    for (let adj of this.graph[node]) {
      if (!this.chk[adj]) {
        if (!(this.graph[adj].length === sz - 1 && this.ok(adj, sz))) {
          return false;
        }
      }
    }
    return true;
  }

  findNumberOfGoodComponent(e, v, edges) {
    this.graph = Array(v + 1)
      .fill()
      .map(() => []);
    for (let i = 0; i < e; i++) {
      this.graph[edges[i][0]].push(edges[i][1]);
      this.graph[edges[i][1]].push(edges[i][0]);
    }
    this.vis = Array(v + 1).fill(0);
    let fans = 0;
    for (let i = 1; i <= v; i++) {
      if (!this.vis[i]) {
        this.sz = 0;
        this.dfs(i);
        this.chk = Array(v + 1).fill(0);
        if (this.ok(i, this.sz)) {
          fans += 1;
        }
      }
    }
    return fans;
  }
}
