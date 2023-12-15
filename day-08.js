//https://www.geeksforgeeks.org/problems/reach-the-nth-point5433/1



class Solution {
    nthPoint(N) {
        let MOD = 1000000007;
        let dp = new Array(N + 1).fill(0);
        dp[0] = 1;
        dp[1] = 1;

        for (let i = 2; i <= N; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
        }

        return dp[N];
    }
}