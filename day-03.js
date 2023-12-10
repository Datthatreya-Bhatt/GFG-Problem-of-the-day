//https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

class Solution {
    // Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr, n) {
        let sum = 0;
        let sumSet = new Set();

        for (let i = 0; i < n; i++) {
            sum += arr[i];

            // Check if the current sum is already in the HashSet.
            if (sum === 0 || sumSet.has(sum)) {
                return true;
            }

            // Add the current sum to the HashSet.
            sumSet.add(sum);
        }

        // No subarray with sum 0 found.
        return false;
    }
}