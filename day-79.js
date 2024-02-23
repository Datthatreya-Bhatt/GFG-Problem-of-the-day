//  https://www.geeksforgeeks.org/problems/maximum-sum-problem2211/1


class Solution {
    constructor() {
        this.dp = {}; 
    }

    maxSum(n) {
        if (n in this.dp) {
            return this.dp[n];
        }

        if (n <= 0) {
            return 0;
        }

        let e1 = this.maxSum(Math.floor(n / 2));
        let e2 = this.maxSum(Math.floor(n / 3));
        let e3 = this.maxSum(Math.floor(n / 4));

        let max_sum = Math.max(n, e1 + e2 + e3);
        this.dp[n] = max_sum;

        return max_sum;
    }
}