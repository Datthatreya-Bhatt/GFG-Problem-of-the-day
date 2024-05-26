//      https://www.geeksforgeeks.org/problems/minimum-cost-to-make-two-strings-identical1107/1



class Solution {
    findMinCost(x, y, costX, costY) {
        let n = x.length;
        let m = y.length;
        let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (x[i - 1] === y[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        let lcs = dp[n][m];
        let xLen = (n - lcs) * costX;
        let yLen = (m - lcs) * costY;

        return xLen + yLen;
    }
}

