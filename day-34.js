// https://www.geeksforgeeks.org/problems/longest-subarray-with-sum-divisible-by-k1259/1



class Solution {
    longSubarrWthSumDivByK(arr, n, k) {
        let prefixSum = 0;
        let maxLength = 0;
        const modMap = new Map();

        for (let i = 0; i < n; i++) {
            prefixSum = (prefixSum + arr[i]) % k;

            if (prefixSum < 0) {
                // Convert negative remainder to positive
                prefixSum += k;
            }

            if (prefixSum === 0) {
                maxLength = i + 1;
            } else if (modMap.has(prefixSum)) {
                maxLength = Math.max(maxLength, i - modMap.get(prefixSum));
            } else {
                modMap.set(prefixSum, i);
            }
        }

        return maxLength;
    }
}