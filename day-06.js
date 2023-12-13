//https://www.geeksforgeeks.org/problems/consecutive-1s-not-allowed1912/1

class Solution {
    countStrings(N) {
        const MOD = 1000000007;

        const dp = new Array(N + 1).fill(0);

        dp[1] = 2;

        dp[2] = 3;

        for (let i = 3; i <= N; i++) {
            
            dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
        }

        return dp[N];
    }
}
