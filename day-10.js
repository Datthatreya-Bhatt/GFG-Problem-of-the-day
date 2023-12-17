//https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1


class Solution {
    findMaxSum(arr, n) {
        if (n === 0) return 0;
        if (n === 1) return arr[0];

        let inclusive = arr[0];
        let exclusive = 0;

        for (let i = 1; i < n; i++) {
            let newInclusive = Math.max(inclusive, exclusive + arr[i]);
            let newExclusive = Math.max(inclusive, exclusive);

            inclusive = newInclusive;
            exclusive = newExclusive;
        }

        return Math.max(inclusive, exclusive);
    }
}