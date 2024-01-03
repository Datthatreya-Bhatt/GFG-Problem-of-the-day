// https://www.geeksforgeeks.org/problems/smallest-window-containing-0-1-and-2--170637/1

class Solution {
    smallestSubstring(S) {
        const n = S.length;

        // Initialize frequency array to keep track of characters in the current window
        const freq = [0, 0, 0];

        // Initialize variables for the sliding window
        let start = 0;
        let minLength = Infinity;

        // Iterate through the string to find the smallest substring
        for (let end = 0; end < n; end++) {
            // Update the frequency of the current character
            freq[parseInt(S[end])]++;

            // Check if the current window contains all three characters
            while (freq[0] > 0 && freq[1] > 0 && freq[2] > 0) {
                // Update minLength based on the current window size
                minLength = Math.min(minLength, end - start + 1);

                // Move the window's left end to the right
                freq[parseInt(S[start])]--;
                start++;
            }
        }

        // If minLength is still Infinity, no valid substring was found
        return minLength === Infinity ? -1 : minLength;
    }
}
