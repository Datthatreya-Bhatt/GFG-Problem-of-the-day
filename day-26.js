// https://www.geeksforgeeks.org/problems/largest-sum-subarray-of-size-at-least-k3121/1


class Solution {
    maxSumWithK(a, n, k) {
        let sum = 0;
        let sum2 = 0;
        let ans = Number.MIN_SAFE_INTEGER;;

        for(let i = 0, j = 0; i < n; ++i) {
            sum += a[i];
            if(i-j+1>=k) {
                sum -= a[j];
                if(sum2 < 0) sum2 = 0;
                sum2 += a[j++];
                ans = Math.max(ans, sum + sum2);
            }
        }

        return ans;
    }
}