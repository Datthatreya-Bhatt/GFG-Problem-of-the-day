// https://www.geeksforgeeks.org/problems/reach-a-given-score-1587115621/1


class Solution {
    count(n) {
        let dp = new Array(n + 1).fill(0);
        dp[0] = 1;
        for (let coins of [3, 5, 10]) {
            for (let i = coins; i <= n; i++) {
                dp[i] += dp[i - coins];
            }
        }
        return dp[n];
    }
}
