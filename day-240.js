//      https://www.geeksforgeeks.org/problems/the-celebrity-problem/1


class Solution {
    // Function to find the celebrity.
    celebrity(mat) {
        let n = mat.length;
        let left = 0;
        let right = n - 1;
        while (left < right) {
          if (mat[left][right] === 1) {
            left += 1;
          } else {
            right -= 1;
          }
        }
        let candidate = left;
        for (let i = 0; i < n; i++) {
          if (i !== candidate) {
            if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
              return -1;
            }
          }
        }
        return candidate;
     }
}