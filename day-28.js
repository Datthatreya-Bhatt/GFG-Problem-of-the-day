// https://www.geeksforgeeks.org/problems/find-element-occuring-once-when-all-other-are-present-thrice/1



class Solution {
    singleElement(arr, N) {
        let result = 0;

        // Iterate through each bit
        for (let i = 0; i < 32; i++) {
            // Count the number of set bits at the ith position
            let count = 0;
            for (let j = 0; j < N; j++) {
                if ((arr[j] & (1 << i)) !== 0) {
                    count++;
                }
            }

            // If the count is not a multiple of 3, set the bit in the result
            if (count % 3 !== 0) {
                result |= (1 << i);
            }
        }

        return result;
    }
}





