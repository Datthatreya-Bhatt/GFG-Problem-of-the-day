//      https://www.geeksforgeeks.org/problems/form-a-palindrome1455/1



class Solution{
    LCM(S1, S2, n) {
      // Initialize a 2D dp array with zeros
      const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  
      // Fill the dp array based on LCS logic
      for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
          // Base case: If either string is empty, LCS length is 0
          if (i === 0 || j === 0) {
            dp[i][j] = 0;
          }
          // If characters match, take diagonal value and add 1
          else if (S1[i - 1] === S2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
          }
          // If characters don't match, take the maximum of left and top values
          else {
            dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
          }
        }
      }
  
      // Return the length of LCS for S1 and S2
      return dp[n][n];
    }
  
    countMin(s) {
      // Get the length of the input string
      const n = s.length;
      // Get the reverse of the input string
      const R_str = s.split("").reverse().join("");
  
      // Get the length of the Longest Common Subsequence between the string and its reverse
      const lcm = this.LCM(s, R_str, n);
  
      // The minimum number of insertions to make the string a palindrome
      // is the length of the string minus the length of the LCS
      return n - lcm;
    }
  
      
  }