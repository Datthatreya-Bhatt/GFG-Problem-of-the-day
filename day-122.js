//  https://www.geeksforgeeks.org/problems/maximize-dot-product2649/1


class Solution {
    maxDotProduct(n, m, a, b) {
      let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
    
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.min(m, i + 1); j++) {
          dp[i + 1][j + 1] = Math.max(dp[i][j] + a[i] * b[j], dp[i][j + 1]);
        }
      }
    
      return dp[n][m];
    }

}
