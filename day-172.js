//      https://www.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1



class Solution {
    /**
    * @param number n
    * @param number[] a

    * @returns number
    */
    longestSubseq(n, a) {
        let dp = new Array(n).fill(1);
        let max1 = Number.NEGATIVE_INFINITY;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (Math.abs(a[i] - a[j]) === 1) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    max1 = Math.max(max1, dp[i]);
                }
            }
        }
        return max1;
    }
    
}
