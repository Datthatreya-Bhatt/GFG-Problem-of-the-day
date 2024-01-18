// https://www.geeksforgeeks.org/problems/water-the-plants--170646/1



class Solution {
    min_sprinklers(gallery, n) {
        const INF = Number.MAX_SAFE_INTEGER;

        // Create an array to represent the coverage of each position
        let coverage = new Array(n).fill(-1);

        // Populate the coverage array based on the sprinkler ranges
        for (let i = 0; i < n; ++i) {
            if (gallery[i] !== -1) {
                let left = Math.max(0, i - gallery[i]);
                let right = Math.min(n - 1, i + gallery[i]);
                for (let j = left; j <= right; ++j) {
                    coverage[j] = Math.max(coverage[j], right);
                }
            }
        }

        // Count the number of sprinklers needed
        let count = 0;
        let curr_end = -1;

        for (let i = 0; i < n; ++i) {
            if (coverage[i] === -1) {
                return -1; // It's not possible to cover the entire gallery
            }

            if (i > curr_end) {
                ++count;
                curr_end = coverage[i];
            }
        }

        return count;
    }
}