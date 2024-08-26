//       https://www.geeksforgeeks.org/problems/wildcard-pattern-matching/1

class Solution {
    wildCard(pattern, string) {
        const m = pattern.length;
        const n = string.length;

        // Create a 2D array for dynamic programming
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
        dp[0][0] = true; // Both pattern and string are empty

        // Handle patterns with leading '*'
        for (let i = 1; i <= m; i++) {
            if (pattern[i - 1] === '*') {
                dp[i][0] = dp[i - 1][0];
            }
        }

        // Fill the dp table
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (pattern[i - 1] === '*') {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' matches zero or more characters
                } else if (pattern[i - 1] === '?' || pattern[i - 1] === string[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]; // Match single character or '?'
                }
            }
        }

        return dp[m][n] ? 1 : 0; // Return 1 if matched, otherwise 0
    }
}
