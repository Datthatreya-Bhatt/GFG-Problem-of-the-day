//  https://www.geeksforgeeks.org/problems/distinct-occurrences/1



class Solution {
    solve(i, j, S, T, dp) {
        const MOD = 10**9 + 7;
        if (j === 0) {
            return 1;
        }
        if (i === 0) {
            return 0;
        }
        if (dp[i][j] !== -1) {
            return dp[i][j] % MOD;
        }
        if (S[i - 1] === T[j - 1]) {
            dp[i][j] = (this.solve(i - 1, j - 1, S, T, dp) + this.solve(i - 1, j, S, T, dp)) % MOD;
        } else {
            dp[i][j] = this.solve(i - 1, j, S, T, dp) % MOD;
        }
        return dp[i][j];
    }

    subsequenceCount(S, T) {
        const n = S.length;
        const m = T.length;
        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
        return this.solve(n, m, S, T, dp);
    }
}