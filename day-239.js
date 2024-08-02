//      https://www.geeksforgeeks.org/problems/edit-distance3702/1




class Solution {
    editDistance(s, t) {
        var m = s.length;
        var n = t.length;
        var dp = [];
        for (var i = 0; i <= m; i++) {
            dp[i] = [];
            for (var j = 0; j <= n; j++) {
                dp[i][j] = 0;
            }
        }
        for (var i = 0; i < m; i++) {
            dp[i + 1][0] = i + 1;
        }
        for (var i = 0; i < n; i++) {
            dp[0][i + 1] = i + 1;
        }
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if (s[i] == t[j]) {
                    dp[i + 1][j + 1] = dp[i][j];
                } else {
                    dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
                }
            }
        }
        return dp[m][n];
    }

}