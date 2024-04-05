//  https://www.geeksforgeeks.org/problems/convert-to-strictly-increasing-array3351/1




class Solution {
    min_operations(nums) {
        const n = nums.length;
        const LIS = new Array(n).fill(1); // Initialize LIS array with 1 for all indices

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j] && (i - j) <= (nums[i] - nums[j])) {
                    LIS[i] = Math.max(LIS[i], LIS[j] + 1);
                }
            }
        }

        // Length of the LIS gives the minimum number of changes needed
        return n - Math.max(...LIS);
    }
}

// Example usage:
const solution = new Solution();
const nums = [1, 3, 2, 4, 6, 5];
console.log(solution.min_operations(nums));
