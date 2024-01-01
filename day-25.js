//https://www.geeksforgeeks.org/problems/array-pair-sum-divisibility-problem3257/1

class Solution {
    /**
    * @param {number[]} nums
    * @param {number} k
    * @returns {boolean}
    */
    canPair(nums, k) {
        // Check if the length of the array is even, as we need pairs
        if (nums.length % 2 !== 0) {
            return false;
        }

        // Create a frequency map to store the occurrences of remainders
        const remainderFreqMap = new Map();

        // Calculate the remainder of each number when divided by k and update the map
        for (const num of nums) {
            const remainder = (num % k + k) % k; // Handling negative numbers
            remainderFreqMap.set(remainder, (remainderFreqMap.get(remainder) || 0) + 1);
        }

        // Iterate over the frequency map
        for (const [remainder, frequency] of remainderFreqMap) {
            // If remainder is 0, check if the frequency is even
            // If remainder is half of k, check if the frequency is even
            // Otherwise, check if the frequency is equal to the complement remainder's frequency
            if (
                (remainder === 0 && frequency % 2 !== 0) ||
                (remainder * 2 === k && frequency % 2 !== 0) ||
                (remainder !== 0 && remainder * 2 !== k && frequency !== remainderFreqMap.get(k - remainder))
            ) {
                return false;
            }
        }

        return true;
    }
}
