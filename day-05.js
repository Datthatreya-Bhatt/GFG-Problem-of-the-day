//https://www.geeksforgeeks.org/problems/gold-mine-problem2608/1



class Solution {
    maxGold(n, m, M) {
      const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  
      for (let i = 0; i < n; i++) {
        dp[i][m - 1] = M[i][m - 1];
      }
      for (let j = m - 2; j >= 0; j--) {
        for (let i = 0; i < n; i++) {
          let moveUp = i > 0 ? dp[i - 1][j + 1] : 0;
          let moveRight = dp[i][j + 1];
          let moveDown = i < n - 1 ? dp[i + 1][j + 1] : 0;
  
          dp[i][j] = M[i][j] + Math.max(moveUp, moveRight, moveDown);
        }
      }
  
      let maxGold = 0;
      for (let i = 0; i < n; i++) {
        maxGold = Math.max(maxGold, dp[i][0]);
      }
  
      return maxGold;
    }
  }