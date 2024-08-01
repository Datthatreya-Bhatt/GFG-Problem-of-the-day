//      https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1



class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let k = 2 * Math.min(m, n);
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let x = 0, y = -1;
    let res = [];
    for (let d = 0; d < k; d++) {
      for (let i = 0; i < n; i++) {
        x += dx[d % 4];
        y += dy[d % 4];
        res.push(matrix[x][y]);
      }
      [m, n] = [n, m - 1];
    }
    return res;
  }
}