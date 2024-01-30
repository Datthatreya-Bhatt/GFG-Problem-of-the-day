// https://www.geeksforgeeks.org/problems/lcs-of-three-strings0028/1




class Solution {
 
    LCSof3(A, B, C, n1, n2, n3) {
     //code here
         let dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0).map(() => new Array(n3 + 1).fill(0)));
         for (let i = 1; i <= n1; i++) {
             for (let j = 1; j <= n2; j++) {
                 for (let k = 1; k <= n3; k++) {
                     if (A[i - 1] === B[j - 1] && B[j - 1] === C[k - 1]) {
                         dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
                     } else {
                         dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i][j - 1][k], dp[i][j][k - 1]);
                     }
                 }
             }
         }
         return dp[n1][n2][n3];
 
   }
 }