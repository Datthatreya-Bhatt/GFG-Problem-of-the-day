//      https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1



class Solution {
    /**
    * @param number n
    * @param number d
    * @param number[] arr
    
    * @returns number
    */
        countPartitions(n, d, arr) {
          let s = arr.reduce((a, b) => a + b, 0);
          if ((s - d) & 1 !== 0 || s < d) {
            return 0;
          }
        
          s = (s - d) / 2;
        
          let dp = Array.from({ length: s + 1 }, () => Array(n + 1).fill(0));
          dp[0][0] = 1;
        
          for (let s0 = 0; s0 <= s; s0++) {
            for (let i = 1; i <= n; i++) {
              dp[s0][i] = dp[s0][i - 1];
              if (s0 - arr[i - 1] >= 0) {
                dp[s0][i] = (dp[s0][i] + dp[s0 - arr[i - 1]][i - 1]) % (10 ** 9 + 7);
              }
            }
          }
        
          return dp[s][n];
        }
    
    }