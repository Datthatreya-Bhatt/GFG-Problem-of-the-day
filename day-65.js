// https://www.geeksforgeeks.org/problems/number-of-paths-in-a-matrix-with-k-coins2728/1








class Solution {
    /**
    * @param number k
    * @param number n
    * @param number[][] arr
    
    * @returns number
    */
         getAns(n, k, arr, count, i, j, dp) {
            if (count > k) {
                return 0;
            }
        
            if (dp[i][j][count] !== -1) {
                return dp[i][j][count];
            }
        
            if (((arr[i][j] + count) === k) && i === j && i === (n-1)) {
                return 1;
            }
        
            let a = 0, b = 0;
            if (i+1 < n) {
                a = this.getAns(n, k, arr, count + arr[i][j], i+1, j, dp);
                if (count + arr[i][j] <= k) {
                    dp[i+1][j][count + arr[i][j]] = a;
                }
            }
            if (j+1 < n) {
                b = this.getAns(n, k, arr, count + arr[i][j], i, j+1, dp);
                if (count + arr[i][j] <= k) {
                    dp[i][j+1][count + arr[i][j]] = b;
                }
            }
            if (count <= k) {
                dp[i][j][count] = a + b;
            }
            return a + b;
    }
    
     numberOfPath(n, k, arr) {
        let dp = new Array(n).fill(null).map(() => new Array(n).fill(null).map(() => new Array(k+1).fill(-1)));
        return this.getAns(n, k, arr, 0, 0, 0, dp);
    }
    
    
    
    }
            